import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import AboutPages from './AboutPages';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/Providers/ThemProvider';



export default {
    title: 'pages/AboutPage',
    component: AboutPages,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AboutPages>;

const Template: ComponentStory<typeof AboutPages> = (args) => <AboutPages {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
