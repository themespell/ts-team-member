import { execSync } from 'child_process';

try {
    console.log('Building admin (minified)...');
    execSync('vite build --config vite.config.admin.js', { stdio: 'inherit' });

    console.log('Building admin (unminified)...');
    execSync('vite build --config vite.config.admin.js --mode development-unminified', { stdio: 'inherit' });

    console.log('Building frontend (minified)...');
    execSync('vite build --config vite.config.frontend.js', { stdio: 'inherit' });

    console.log('Building frontend (unminified)...');
    execSync('vite build --config vite.config.frontend.js --mode development-unminified', { stdio: 'inherit' });

    console.log('Build completed successfully.');
} catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
}