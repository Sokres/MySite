import React from 'react';
import { classNames } from 'shared/lib/classNaame/ClassName';
import cl from './Loader.module.css';

interface LoaderProps {
className?: string;
}
export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames(cl.Loader, {}, [className])}>
        <div className={cl['lds-ring']}>
            <div />
            <div />
            <div />
            <div />
        </div>
    </div>
);
