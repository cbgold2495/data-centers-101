// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://cbgold2495.github.io',
  base: '/data-centers-101',
  integrations: [react()]
});