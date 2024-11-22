import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import postcssNesting from 'postcss-nesting';

export default defineConfig({
  root: './src',
	plugins: [
    injectHTML(),
    postcssNesting()
  ],
  base: 'https://blackmozzzart.github.io/Landing_goszakazgroup/',
  build: {
    rollupOptions: {
      input: {
        index: '/index.html',
        404: '/404.html',
        inner: '/inner.html',
      }
    }
  }
});
