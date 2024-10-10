import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/Providers/ThemProvider';
import { SwithcerLang } from './SwithcerLang';

export default {
    title: 'widget/SwithcerLang',
    component: SwithcerLang,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SwithcerLang>;

const Template: ComponentStory<typeof SwithcerLang> = (args) => <SwithcerLang {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
