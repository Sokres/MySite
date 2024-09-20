import { classNames } from 'shared/lib/classNaame/ClassName';
import cl from './Button.module.css';
import { ButtonHTMLAttributes, FC } from 'react';

export enum ButtonTheme {
	CLEAR = 'clear',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ButtonTheme;
}
export const Button: FC<ButtonProps> = (props) => {
    const { children, className, theme, ...otherProps } = props;
    return (
        <button
            className={classNames(cl.Button, {}, [className, cl[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
