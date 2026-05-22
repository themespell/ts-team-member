#!/usr/bin/env node

/**
 * WordPress.org SVN deployment script.
 *
 * Flow:
 * 1. Build the distributable ZIP via build-dist.js
 * 2. Ensure a local SVN working copy exists in .wordpress-org
 * 3. Sync plugin files into trunk/ using .distignore rules
 * 4. Copy trunk/ to tags/{version}
 * 5. Commit to WordPress.org SVN
 *
 * Optional environment variables:
 * - WPORG_SLUG=ts-team-member
 * - WPORG_SVN_URL=https://plugins.svn.wordpress.org/ts-team-member/
 * - WPORG_WORKING_COPY=.wordpress-org
 * - WPORG_ASSETS_DIR=assets-wporg
 * - WPORG_COMMIT_MESSAGE="Release 1.2.6"
 * - WPORG_DRY_RUN=1
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawnSync } from 'child_process';
import readline from 'readline/promises';
import ignore from 'ignore';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PLUGIN_SLUG = process.env.WPORG_SLUG || 'ts-team-member';
const SOURCE_DIR = __dirname;
const DISTIGNORE_FILE = path.join(SOURCE_DIR, '.distignore');
const MAIN_PLUGIN_FILE = path.join(SOURCE_DIR, 'class-ts-team.php');
const README_FILE = path.join(SOURCE_DIR, 'readme.txt');
const WPORG_USERNAME = process.env.WPORG_USERNAME || 'themespell';
const WPORG_PASSWORD = process.env.WPORG_PASSWORD || 'svn_SvC2kAc5pjB4E9k7SOoj3yHivGcIzpkU47da8b51';
const SVN_URL = process.env.WPORG_SVN_URL || 'https://plugins.svn.wordpress.org/ts-team-member/';
const WORKING_COPY_DIR = path.resolve(SOURCE_DIR, process.env.WPORG_WORKING_COPY || '.wordpress-org');
const SVN_ASSETS_SOURCE = path.resolve(SOURCE_DIR, process.env.WPORG_ASSETS_DIR || 'assets-wporg');
const DRY_RUN = process.env.WPORG_DRY_RUN === '1';

function runCommand(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: options.cwd || SOURCE_DIR,
    stdio: options.capture ? ['inherit', 'pipe', 'pipe'] : 'inherit',
    encoding: 'utf8'
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0 && !options.allowFailure) {
    const stderr = result.stderr ? `\n${result.stderr}` : '';
    throw new Error(`Command failed: ${command} ${args.join(' ')}${stderr}`);
  }

  return result;
}

function withSvnAuth(args, { includePassword = true } = {}) {
  const authArgs = [...args];

  if (WPORG_USERNAME) {
    authArgs.push('--username', WPORG_USERNAME);
  }

  if (includePassword && WPORG_PASSWORD) {
    authArgs.push('--password', WPORG_PASSWORD, '--non-interactive');
  }

  return authArgs;
}

function commandExists(command) {
  const checker = process.platform === 'win32' ? 'where' : 'which';
  const result = spawnSync(checker, [command], {
    stdio: 'ignore'
  });

  return result.status === 0;
}

function getPluginMetadata() {
  const metadata = {
    version: '1.0.0',
    stableTag: '1.0.0'
  };

  const pluginContent = fs.readFileSync(MAIN_PLUGIN_FILE, 'utf8');
  const readmeContent = fs.readFileSync(README_FILE, 'utf8');

  const versionMatch = pluginContent.match(/\*\s*Version:\s*([0-9.]+)/i);
  if (versionMatch && versionMatch[1]) {
    metadata.version = versionMatch[1];
  }

  const stableTagMatch = readmeContent.match(/^Stable tag:\s*([0-9.]+)$/im);
  if (stableTagMatch && stableTagMatch[1]) {
    metadata.stableTag = stableTagMatch[1];
  }

  return metadata;
}

function validateMetadata(metadata) {
  if (metadata.version !== metadata.stableTag) {
    throw new Error(
      `Version mismatch: class-ts-team.php is ${metadata.version}, readme.txt stable tag is ${metadata.stableTag}`
    );
  }
}

function loadDistIgnore() {
  const ig = ignore();

  ig.add([
    '.git',
    '.DS_Store',
    'dist',
    '.wordpress-org',
    'build-dist.js',
    'build-svn.js',
    '.claude',
    '.idea',
    'eslint.config.js'
  ]);

  if (fs.existsSync(DISTIGNORE_FILE)) {
    const content = fs.readFileSync(DISTIGNORE_FILE, 'utf8');
    const lines = content
      .split('\n')
      .map(line => line.trim())
      .filter(line => line && !line.startsWith('#'));

    ig.add(lines);
  }

  return ig;
}

function getAllFiles(dirPath, ig, files = [], relativeTo = SOURCE_DIR) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  entries.forEach(entry => {
    const fullPath = path.join(dirPath, entry.name);
    const relativePath = path.relative(relativeTo, fullPath);
    const normalizedPath = relativePath.split(path.sep).join('/');
    const testPath = entry.isDirectory() ? `${normalizedPath}/` : normalizedPath;
    const testResult = ig.test(testPath);

    if (entry.isDirectory()) {
      if (testResult.ignored && !testResult.unignored) {
        return;
      }

      getAllFiles(fullPath, ig, files, relativeTo);
      return;
    }

    if (!testResult.ignored || testResult.unignored) {
      files.push(relativePath);
    }
  });

  return files;
}

function getInstallPlan() {
  if (process.platform === 'darwin') {
    if (commandExists('brew')) {
      return {
        label: 'Homebrew',
        command: 'brew',
        args: ['install', 'subversion'],
        manual: 'brew install subversion'
      };
    }

    return null;
  }

  if (process.platform === 'linux') {
    if (commandExists('apt-get')) {
      return {
        label: 'APT',
        command: 'sudo',
        args: ['apt-get', 'update'],
        postInstall: {
          command: 'sudo',
          args: ['apt-get', 'install', '-y', 'subversion']
        },
        manual: 'sudo apt-get update && sudo apt-get install -y subversion'
      };
    }

    if (commandExists('dnf')) {
      return {
        label: 'DNF',
        command: 'sudo',
        args: ['dnf', 'install', '-y', 'subversion'],
        manual: 'sudo dnf install -y subversion'
      };
    }

    if (commandExists('yum')) {
      return {
        label: 'YUM',
        command: 'sudo',
        args: ['yum', 'install', '-y', 'subversion'],
        manual: 'sudo yum install -y subversion'
      };
    }

    if (commandExists('pacman')) {
      return {
        label: 'pacman',
        command: 'sudo',
        args: ['pacman', '-Sy', '--noconfirm', 'subversion'],
        manual: 'sudo pacman -Sy --noconfirm subversion'
      };
    }

    if (commandExists('brew')) {
      return {
        label: 'Homebrew',
        command: 'brew',
        args: ['install', 'subversion'],
        manual: 'brew install subversion'
      };
    }

    return null;
  }

  if (process.platform === 'win32') {
    if (commandExists('winget')) {
      return {
        label: 'winget',
        command: 'winget',
        args: ['install', '-e', '--id', 'Slik.Subversion'],
        manual: 'winget install -e --id Slik.Subversion'
      };
    }

    if (commandExists('choco')) {
      return {
        label: 'Chocolatey',
        command: 'choco',
        args: ['install', 'sliksvn', '-y'],
        manual: 'choco install sliksvn -y'
      };
    }

    return null;
  }

  return null;
}

async function askToInstallSvn(installPlan) {
  if (!process.stdin.isTTY || !process.stdout.isTTY) {
    const suffix = installPlan ? ` Try: ${installPlan.manual}` : '';
    throw new Error(`Subversion is not installed.${suffix}`);
  }

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  try {
    const question = installPlan
      ? `Subversion is not installed. Install it now with ${installPlan.label}? [y/N] `
      : 'Subversion is not installed and no supported package manager was detected. Install it manually, then rerun this command. Press Enter to exit. ';

    const answer = await rl.question(question);
    return /^(y|yes)$/i.test(answer.trim());
  } finally {
    rl.close();
  }
}

function runInstallPlan(installPlan) {
  if (!installPlan) {
    throw new Error('Subversion is not installed and no supported package manager was detected.');
  }

  console.log(`Installing Subversion via ${installPlan.label}...`);
  runCommand(installPlan.command, installPlan.args);

  if (installPlan.postInstall) {
    runCommand(installPlan.postInstall.command, installPlan.postInstall.args);
  }
}

async function ensureSvnAvailable() {
  if (commandExists('svn')) {
    runCommand('svn', ['--version', '--quiet']);
    return;
  }

  const installPlan = getInstallPlan();
  const shouldInstall = await askToInstallSvn(installPlan);

  if (!shouldInstall) {
    const suffix = installPlan ? ` Install it manually with: ${installPlan.manual}` : '';
    throw new Error(`Subversion is required before pushing to WordPress.org SVN.${suffix}`);
  }

  runInstallPlan(installPlan);

  if (!commandExists('svn')) {
    const suffix = installPlan ? ` You can try manually with: ${installPlan.manual}` : '';
    throw new Error(`Subversion install did not make the svn command available.${suffix}`);
  }

  runCommand('svn', ['--version', '--quiet']);
}

function ensureWorkingCopy() {
  if (!fs.existsSync(WORKING_COPY_DIR)) {
    console.log(`Checking out ${SVN_URL} into ${WORKING_COPY_DIR}`);
    runCommand('svn', withSvnAuth(['checkout', SVN_URL, WORKING_COPY_DIR]));
    return;
  }

  if (!fs.existsSync(path.join(WORKING_COPY_DIR, '.svn'))) {
    throw new Error(`${WORKING_COPY_DIR} exists but is not an SVN working copy.`);
  }
}

function ensureDirectory(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function clearDirectory(dirPath) {
  ensureDirectory(dirPath);

  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    if (entry.name === '.svn') {
      continue;
    }

    fs.rmSync(path.join(dirPath, entry.name), { recursive: true, force: true });
  }
}

function copyFile(sourcePath, destinationPath) {
  ensureDirectory(path.dirname(destinationPath));
  fs.copyFileSync(sourcePath, destinationPath);
}

function syncFiles(fileList, destinationRoot) {
  clearDirectory(destinationRoot);

  for (const relativeFile of fileList) {
    const sourcePath = path.join(SOURCE_DIR, relativeFile);
    const destinationPath = path.join(destinationRoot, relativeFile);

    copyFile(sourcePath, destinationPath);
  }
}

function syncDirectory(sourceDir, destinationDir) {
  if (!fs.existsSync(sourceDir)) {
    return false;
  }

  clearDirectory(destinationDir);

  const queue = [sourceDir];

  while (queue.length > 0) {
    const currentDir = queue.pop();
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const sourcePath = path.join(currentDir, entry.name);
      const relativePath = path.relative(sourceDir, sourcePath);
      const destinationPath = path.join(destinationDir, relativePath);

      if (entry.isDirectory()) {
        ensureDirectory(destinationPath);
        queue.push(sourcePath);
      } else {
        copyFile(sourcePath, destinationPath);
      }
    }
  }

  return true;
}

function applySvnAddsAndDeletes() {
  const statusResult = runCommand('svn', ['status'], {
    cwd: WORKING_COPY_DIR,
    capture: true
  });

  const output = statusResult.stdout || '';
  const lines = output.split('\n').filter(Boolean);

  for (const line of lines) {
    const status = line[0];
    const relativePath = line.slice(8).trim();

    if (!relativePath) {
      continue;
    }

    if (status === '?') {
      runCommand('svn', ['add', '--force', relativePath], { cwd: WORKING_COPY_DIR });
    }

    if (status === '!') {
      runCommand('svn', ['delete', '--force', relativePath], { cwd: WORKING_COPY_DIR });
    }
  }
}

function getSvnStatus(targetPath) {
  const statusResult = runCommand('svn', ['status', targetPath], {
    cwd: WORKING_COPY_DIR,
    capture: true,
    allowFailure: true
  });

  return (statusResult.stdout || '').trim();
}

function remoteTagExists(version) {
  const result = runCommand('svn', withSvnAuth(['info', `${SVN_URL.replace(/\/$/, '')}/tags/${version}`]), {
    cwd: WORKING_COPY_DIR,
    capture: true,
    allowFailure: true
  });

  return result.status === 0;
}

function ensureTagDoesNotExist(version) {
  const tagDir = path.join(WORKING_COPY_DIR, 'tags', version);

  if (remoteTagExists(version)) {
    throw new Error(`SVN tag already exists: tags/${version}`);
  }

  if (!fs.existsSync(tagDir)) {
    return;
  }

  const relativeTagPath = path.relative(WORKING_COPY_DIR, tagDir);
  const localStatus = getSvnStatus(relativeTagPath);

  if (!localStatus) {
    throw new Error(`SVN tag already exists locally and appears versioned: tags/${version}`);
  }

  console.log(`Cleaning failed local tag state for tags/${version}...`);
  runCommand('svn', ['revert', '-R', relativeTagPath], {
    cwd: WORKING_COPY_DIR,
    allowFailure: true
  });
  fs.rmSync(tagDir, { recursive: true, force: true });
}

function prepareTag(version, trunkDir) {
  const tagDir = path.join(WORKING_COPY_DIR, 'tags', version);
  ensureDirectory(path.join(WORKING_COPY_DIR, 'tags'));
  syncDirectory(trunkDir, tagDir);
}

function hasWorkingCopyChanges() {
  const statusResult = runCommand('svn', ['status'], {
    cwd: WORKING_COPY_DIR,
    capture: true
  });

  return Boolean((statusResult.stdout || '').trim());
}

async function main() {
  const metadata = getPluginMetadata();
  const commitMessage = process.env.WPORG_COMMIT_MESSAGE || `Release ${metadata.version}`;
  const ig = loadDistIgnore();
  const distributableFiles = getAllFiles(SOURCE_DIR, ig);

  console.log('');
  console.log('========================================');
  console.log(`  Pushing ${PLUGIN_SLUG} v${metadata.version} to SVN`);
  console.log('========================================');
  console.log('');

  validateMetadata(metadata);
  await ensureSvnAvailable();

  console.log('Building distributable ZIP...');
  runCommand('node', ['build-dist.js']);

  ensureWorkingCopy();

  const trunkDir = path.join(WORKING_COPY_DIR, 'trunk');
  const assetsDir = path.join(WORKING_COPY_DIR, 'assets');

  console.log('Syncing trunk...');
  syncFiles(distributableFiles, trunkDir);

  if (syncDirectory(SVN_ASSETS_SOURCE, assetsDir)) {
    console.log(`Synced WordPress.org assets from ${path.relative(SOURCE_DIR, SVN_ASSETS_SOURCE)}`);
  } else {
    console.log('No assets-wporg directory found, skipping WordPress.org assets sync');
  }

  ensureTagDoesNotExist(metadata.version);
  console.log(`Preparing tag ${metadata.version}...`);
  prepareTag(metadata.version, trunkDir);

  applySvnAddsAndDeletes();

  if (!hasWorkingCopyChanges()) {
    console.log('No SVN changes detected. Nothing to commit.');
    return;
  }

  if (DRY_RUN) {
    console.log('Dry run enabled. Skipping SVN commit.');
    runCommand('svn', ['status'], { cwd: WORKING_COPY_DIR });
    return;
  }

  console.log(`Committing with message: ${commitMessage}`);
  runCommand('svn', withSvnAuth(['commit', '-m', commitMessage]), { cwd: WORKING_COPY_DIR });
}

main().catch(error => {
  console.error(`SVN push failed: ${error.message}`);
  process.exit(1);
});
