
import { classNames } from 'shared/lib/classNaame/ClassName';
import cl from './NotFound.module.css';
import { useTranslation } from 'react-i18next';

interface NotFoundProps {
className?: string;
}
export const NotFound = ({ className }: NotFoundProps) => {
    const {t} = useTranslation('translation');
    return (
        <div className={classNames(cl.NotFound, {}, [className])}>
            <h1>{t('not_found')}</h1>
        </div>
    );
};