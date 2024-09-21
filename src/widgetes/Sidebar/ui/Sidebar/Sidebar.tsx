import { useState } from 'react';
import { classNames } from 'shared/lib/classNaame/ClassName';
import cl from './Sidebar.module.css';
import { BtnTheme } from 'widgetes/BtnTheme';
import { SwithcerLang } from 'widgetes/SwitcherLang';

interface SidebarProps {
	className?: string;
}
export const Sidebar = ({ className }: SidebarProps) => {
    const [show, getShow] = useState(false);
    const onToggle = () => {
        getShow((open) => !open);
    };
    return (
        <div className={classNames(cl.sidebar, { [cl.show]: show }, [className])}>
            <button onClick={onToggle}>Show</button>
            <div className={cl.svitchers}>
                <BtnTheme />
                <SwithcerLang className={cl.lang} />
            </div>
        </div>
    );
};
