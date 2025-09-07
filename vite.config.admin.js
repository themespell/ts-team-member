import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        minify: false,
        manifest: false,
        rollupOptions: {
            input: path.resolve(__dirname, 'src/main.jsx'), // Admin entry point
            output: {
                dir: 'includes/assets/admin', // Output directory
                entryFileNames: 'admin.js', // JS file naming pattern
                assetFileNames: 'admin.[ext]', // CSS file naming pattern
                inlineDynamicImports: true, // Inline all dynamic imports
            },
        },
    },
});