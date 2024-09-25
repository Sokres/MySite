import React from 'react';
import { classNames } from 'shared/lib/classNaame/ClassName';
import cl from './PageError.module.css';
import { useTranslation } from 'react-i18next';
import IconBug from 'shared/assets/icons/icon-bug.svg'

interface PageErrorProps {
className?: string;
}
export const PageError = ({ className }: PageErrorProps) => {
    const {t} = useTranslation('translation')
    const reload = () =>{
        location.reload()
    }
    return (
        <div className={classNames(cl.PageError, {}, [className])}>

            <IconBug />
            <h1>{t('error_bound')}</h1>
            <button className={cl.btnReload}  onClick={reload}>{t('reload_page')}</button>
        </div>
    );
};