import React from 'react';
import { classNames } from 'shared/lib/classNaame/ClassName';
import { useTranslation } from 'react-i18next';
import IconBug from 'shared/assets/icons/icon-bug.svg';
import cl from './PageError.module.css';

interface PageErrorProps {
className?: string;
}
export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation('translation');
    const reload = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    return (
        <div className={classNames(cl.PageError, {}, [className])}>

            <IconBug />
            <h1>{t('error_bound')}</h1>
            <button type="button" className={cl.btnReload} onClick={reload}>
                {t('reload_page')}
            </button>
        </div>
    );
};
