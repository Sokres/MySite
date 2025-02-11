import { classNames } from 'shared/lib/classNaame/ClassName';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cl from './SwithcerLang.module.css';

interface SwithcerLangProps {
	className?: string;
    short?: boolean;
}
export const SwithcerLang = ({ className, short }: SwithcerLangProps) => {
    const { t, i18n } = useTranslation('translation');
    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button
            onClick={toggle}
            theme={ButtonTheme.CLEAR}
            className={classNames(cl.SwithcerLang, {}, [className])}
        >
            {t(short ? 'LangMin' : 'Lang')}
        </Button>
    );
};
