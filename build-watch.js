import { exec } from 'child_process';

// Function to run a command and log output
function runCommand(command, label) {
    return new Promise((resolve, reject) => {
        const child = exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error in ${label}:`, error.message);
                reject(error);
                return;
            }
            if (stderr) {
                console.error(`Stderr in ${label}:`, stderr);
            }
            resolve(stdout);
        });

        // Pipe stdout and stderr to the console
        child.stdout.on('data', (data) => console.log(`[${label}]`, data.trim()));
        child.stderr.on('data', (data) => console.error(`[${label}]`, data.trim()));
    });
}

// Watch both admin and frontend builds
async function watchBuilds() {
    console.log('Starting watch mode for admin and frontend...');

    try {
        // Start watching admin build
        runCommand('vite build --config vite.config.admin.js --watch', 'Admin');

        // Start watching frontend build
        runCommand('vite build --config vite.config.frontend.js --watch', 'Frontend');
    } catch (error) {
        console.error('Failed to start watch mode:', error);
    }
}

// Run the watch process
watchBuilds();