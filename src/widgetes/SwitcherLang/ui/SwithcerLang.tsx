import { classNames } from 'shared/lib/classNaame/ClassName';
import cl from './SwithcerLang.module.css';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface SwithcerLangProps {
	className?: string;
}
export const SwithcerLang = ({ className }: SwithcerLangProps) => {
    const { t, i18n } = useTranslation();
    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    console.log(className);
    return (
        <Button
            onClick={toggle}
            theme={ButtonTheme.CLEAR}
            className={classNames(cl.SwithcerLang, {}, [className])}
        >
            {t('Lang')}
        </Button>
    );
};
