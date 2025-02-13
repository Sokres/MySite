import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/Providers/ThemProvider';
import IconSidebarOpen from 'shared/assets/icons/icon-arrow-sidebar-open.svg';
import { Button, ButtonTheme } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};
export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};
export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};
export const BackgoundThem = Template.bind({});
BackgoundThem.args = {
    children: 'Text',
    theme: ButtonTheme.BACKROUND,
};
export const BackgoundInverted = Template.bind({});
BackgoundInverted.args = {
    children: <IconSidebarOpen />,
    theme: ButtonTheme.BACKROUND_INVERTED,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
