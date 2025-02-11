import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNaame/ClassName';
import cl from './Button.module.css';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKROUND = 'background',
    BACKROUND_INVERTED = 'background_inverted'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(cl.Button, { [cl[theme]]: true }, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
