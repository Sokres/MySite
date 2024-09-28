import { Story } from '@storybook/react';
import { Theme } from 'app/Providers/ThemProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);
