import React from 'react';
import { classNames } from 'shared/lib/classNaame/ClassName';
import cl from './BtnTheme.module.css';
import { Theme, useThem } from 'app/Providers/ThemProvider';
import IconLight from 'shared/assets/icons/icon-light.svg';
import IconDark from 'shared/assets/icons/icon-dark.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface BtnThemeProps {
	className?: string;
}
export const BtnTheme = ({ className }: BtnThemeProps) => {
    const { theme, handleThemeChange } = useThem();
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames(cl.BtnTheme, {}, [className])}
            onClick={handleThemeChange}
        >
            {theme === Theme.LIGHT ? <IconLight /> : <IconDark />}
        </Button>
    );
};
