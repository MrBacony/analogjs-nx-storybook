import { createRequire } from 'node:module';

import type { StorybookConfig } from '@analogjs/storybook-angular';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { UserConfig, mergeConfig } from 'vite';
import * as path from 'path';

const require = createRequire(import.meta.url);

const config: StorybookConfig = {
  stories: [
    '../src/app/**/*.@(mdx|stories.@(js|jsx|ts|tsx))',
    '../../../libs/**/*.@(mdx|stories.@(js|jsx|ts|tsx))',
  ],
  addons: [
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-docs'),
  ],
  framework: {
    name: '@analogjs/storybook-angular',
    options: {},
  },
  staticDirs: [{ from: '../public/assets', to: '/assets' }],

  docs: {},
  async viteFinal(config: UserConfig) {
    return mergeConfig(config, {
      plugins: [nxViteTsPaths()],
    });
  },
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs
function getAbsolutePath(value: string): any {
  return path.dirname(require.resolve(path.join(value, 'package.json')));
}
