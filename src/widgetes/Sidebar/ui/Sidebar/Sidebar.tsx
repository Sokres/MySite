import { useState } from 'react';
import { classNames } from 'shared/lib/classNaame/ClassName';
import { BtnTheme } from 'widgetes/BtnTheme';
import { SwithcerLang } from 'widgetes/SwitcherLang';
import { Button } from 'shared/ui/Button/Button';
import cl from './Sidebar.module.css';

interface SidebarProps {
    className?: string;
}
export const Sidebar = ({ className }: SidebarProps) => {
    const [show, getShow] = useState(false);
    const onToggle = () => {
        getShow((open) => !open);
    };
    return (
        <div data-testid="sidebar" className={classNames(cl.sidebar, { [cl.show]: show }, [className])}>
            <Button data-testid="sidebar-toggle" onClick={onToggle}>Show</Button>
            <div className={cl.svitchers}>
                <BtnTheme />
                <SwithcerLang className={cl.lang} />
            </div>
        </div>
    );
};
