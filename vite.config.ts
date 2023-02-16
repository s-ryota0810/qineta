import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: ['resources/sass/app.scss', 'resources/ts/app.tsx'],
            refresh: true,
        }),
    ],
    resolve: {
        alias: {
          "~": path.resolve(__dirname, "resources/ts"),
        },
      },
});
