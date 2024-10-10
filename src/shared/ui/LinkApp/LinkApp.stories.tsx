import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LinkApp, LinkAppThtme } from './LinkApp';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/Providers/ThemProvider';

export default {
    title: 'shared/LinkApp',
    component: LinkApp,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/'
    }
} as ComponentMeta<typeof LinkApp>;

const Template: ComponentStory<typeof LinkApp> = (args) => <LinkApp {...args} />;

export const Pimary = Template.bind({});
Pimary.args = {
    children: 'Text',
    theme: LinkAppThtme.PRIMARY
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'text',
    theme: LinkAppThtme.SECONDARY
};
export const DarkPimary = Template.bind({});
DarkPimary.args = {
    children: 'Text',
    theme: LinkAppThtme.PRIMARY
};

DarkPimary.decorators = [ThemeDecorator(Theme.DARK)];
export const DarkSecondary = Template.bind({});
DarkSecondary.args = {
    children: 'text',
    theme: LinkAppThtme.SECONDARY
};

DarkSecondary.decorators = [ThemeDecorator(Theme.DARK)];