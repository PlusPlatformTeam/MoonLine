import { useTranslation } from 'react-i18next';

function Data() {
    const { t } = useTranslation();
    return [
        {title: t('category.all'), click: "all"},
        {title: t('category.develpment'), click: "develpment"},
        {title: t('category.design'), click: "design"},
        {title: t('category.advertise'), click: "advertise"},
    ];
}

export default Data;