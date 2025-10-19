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
            emptyOutDir: false,
            rollupOptions: {
                input: path.resolve(__dirname, 'src/main.jsx'),
                output: {
                    dir: 'includes/assets/admin',
                    entryFileNames: isMinified ? 'admin.min.js' : 'admin.js',
                    assetFileNames: isMinified ? 'admin.min.[ext]' : 'admin.[ext]',
                    inlineDynamicImports: true,
                },
            },
        },
    };
});