// @ts-ignore
import fg from 'fast-glob';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'assets',
    assetsDir: '.',
    emptyOutDir: false,
    cssCodeSplit: false,
    rollupOptions: {
      input: ['src/entries/*.{tsx,ts}'],
      output: {
        dir: 'assets',
        entryFileNames: 'theme.[name].js',
        chunkFileNames: 'theme.[name].chunk.js',
        assetFileNames: 'theme.[name].[ext]',
      },
      plugins: [
        {
          name: 'glob-input',
          options(options) {
            const inputs = typeof options.input === 'string' ? [options.input] : options.input;

            return Array.isArray(inputs)
              ? { ...options, input: inputs.flatMap((input) => fg.sync(input)) }
              : null;
          },
        },
      ],
    },
  },
  plugins: [],
});
