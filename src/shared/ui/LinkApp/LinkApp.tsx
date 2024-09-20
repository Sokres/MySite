import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNaame/ClassName';
import cl from './LinkApp.module.css';
import { Link, LinkProps } from 'react-router-dom';

export enum LinkAppThtme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}
interface LinkAppProps extends LinkProps {
	className?: string;
	theme?: LinkAppThtme;
}
export const LinkApp: FC<LinkAppProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = LinkAppThtme.PRIMARY,
        ...otherProps
    } = props;
    return (
        <Link
            to={to}
            className={classNames(cl.LinkApp, {}, [className, cl[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
