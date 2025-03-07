import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({

    
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
        tailwindcss(),
    ],
    esbuild: {
        jsx: 'automatic',
    },
    resolve: {
        alias: {
            'ziggy-js': resolve(__dirname, 'vendor/tightenco/ziggy'),
        },
    },

    server: {
        host: '0.0.0.0',  // Permite el acceso desde cualquier dispositivo en la misma red
        port: 5173,       // El puerto en el que corre Vite (por defecto)
        hmr: {
          host: '10.0.0.12',  // Cambia esta IP por la IP local de tu máquina si es necesario
        }
    },

    
});
