import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPages = () => {
    const { t } = useTranslation('about');
    return <div>{t('About')}</div>;
};

export default AboutPages;
