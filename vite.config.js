import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import postcssNesting from 'postcss-nesting';

export default defineConfig({
  root: './src',
	plugins: [
    injectHTML(),
    postcssNesting()
  ],
});
