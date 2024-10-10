import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/Providers/ThemProvider';
import AboutPages from './AboutPages';

export default {
    title: 'pages/AboutPages',
    component: AboutPages,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AboutPages>;

const Template: ComponentStory<typeof AboutPages> = (args) => <AboutPages />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
