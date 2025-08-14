import { Meta, StoryObj } from '@storybook/angular';
import { App } from './app';
const meta: Meta<App> = {
    component: App,
    title: 'General/App',
};
export default meta;
type Story = StoryObj<App>;

export const Default: Story = {
    args: {},
    render: () => ({
        template: `<h1 class="text-3xl font-bold"> Hallo Storybook </h1>`,
    }),
};
