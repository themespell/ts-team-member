import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const isMinified = mode !== 'development-unminified';

    return {
        plugins: [react()],
        build: {
            minify: isMinified,
            manifest: false,
            emptyOutDir: false, // IMPORTANT: Don't clear the directory
            rollupOptions: {
                input: path.resolve(__dirname, 'src/frontend/Frontend.jsx'),
                output: {
                    dir: 'includes/assets/frontend',
                    entryFileNames: isMinified ? 'frontend.min.js' : 'frontend.js',
                    assetFileNames: isMinified ? 'frontend.min.[ext]' : 'frontend.[ext]',
                    inlineDynamicImports: true,
                },
            },
        },
    };
});