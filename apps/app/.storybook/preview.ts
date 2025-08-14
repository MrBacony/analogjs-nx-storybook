import 'zone.js';
import { applicationConfig, type Preview } from '@analogjs/storybook-angular';
import { provideHttpClient } from '@angular/common/http';
// Import global styles
import '../src/styles.css';

// Uncomment if you have compodoc documentation
// import { setCompodocJson } from '@storybook/addon-docs/angular';
// import docJson from '../documentation.json';
// setCompodocJson(docJson);

const preview: Preview = {
    decorators: [
        applicationConfig({
            providers: [
                provideHttpClient(),
                
            ],
        }),
    ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
            default: 'grey',
            values: [
                {
                    name: 'grey',
                    value: '#F9F9F9',
                },
            ],
        },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;