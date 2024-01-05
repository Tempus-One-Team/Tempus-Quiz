import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            api: '/src/api',
            assets: '/src/assets',
            components: '/src/components',
            hooks: '/src/hooks',
            pages: '/src/pages',
            store: '/src/store',
            types: '/src/types',
            utils: '/src/utils',
            router: '/src/router',
            shared: '/src/shared',
        },
    },
});
