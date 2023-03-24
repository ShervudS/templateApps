import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import {resolve} from 'path'
import alias from '@rollup/plugin-alias'

// https://vitejs.dev/config/
export default defineConfig(({mode, command}) => ({
    plugins: [react(), alias()],

    base: './',

    resolve: {
        alias: {
            _App: resolve(__dirname, './src/App'),
            _processed: resolve(__dirname, './src/processed'),
            _pages: resolve(__dirname, './src/pages'),
            _widgets: resolve(__dirname, './src/widgets'),
            _features: resolve(__dirname, './src/features'),
            _entities: resolve(__dirname, './src/entities'),
            _shared: resolve(__dirname, './src/shared'),
            _assets: resolve(__dirname, './src/assets'),
            _styles: resolve(__dirname, './src/styles'),
        },
    },

    build: {
        minify: mode === 'development' ? false : 'terser',
        sourcemap: command === 'serve' ? 'inline' : false,

        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
            },

            output: {
                entryFileNames: 'js/[name].js',
                assetFileNames: '[ext]/[name][extname]',
                chunkFileNames: 'js/[hash].js',
                dir: 'dist/',
            },
        },
    },
}));
