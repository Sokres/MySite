import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation('translation');
    return <div>{t('glavnaya')}</div>;
};
export default MainPage;
