import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        minify: true,
        manifest: false,
        rollupOptions: {
            input: path.resolve(__dirname, 'src/frontend/Frontend.jsx'), // Frontend entry point
            output: {
                dir: 'includes/assets/frontend', // Output directory
                entryFileNames: 'frontend.js', // JS file naming pattern
                assetFileNames: 'frontend.[ext]', // CSS file naming pattern
                inlineDynamicImports: true, // Inline all dynamic imports
            },
        },
    },
});