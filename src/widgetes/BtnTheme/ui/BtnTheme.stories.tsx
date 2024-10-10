import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/Providers/ThemProvider';
import { BtnTheme } from './BtnTheme';

export default {
    title: 'widget/BtnTheme',
    component: BtnTheme,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof BtnTheme>;

const Template: ComponentStory<typeof BtnTheme> = (args) => <BtnTheme {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
