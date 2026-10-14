import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import legacy from '@vitejs/plugin-legacy';
import vitePluginImageMinify from 'vite-plugin-image-minify';

export default defineConfig({
    plugins: [
        tailwindcss(),
        legacy({
            targets: ['defaults', 'not IE 11'],
        }),
        vitePluginImageMinify(),
    ],
})