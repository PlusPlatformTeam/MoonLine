import webLogo from '../../assets/images/weAppLogo.png';
import designLogo from '../../assets/images/designLogo.png';
import adLogo from '../../assets/images/AddContentLogo.png';
import { useTranslation } from 'react-i18next';

function Data() {
    const { t } = useTranslation();
    return [
        {logo: webLogo, title: t('services.webAppTitle'), desc: t('services.webAppDesc'), bgColor: "blue-light-gradiant", color: "blue"},
        {logo: designLogo, title: t('services.designTitle'), desc: t('services.designDesc'), bgColor: "green-light-gradiant", color: "green"},
        {logo: adLogo, title: t('services.adTitle'), desc: t('services.adDesc'), bgColor: "yellow-light-gradiant", color: "yellow"}
    ];
}

export default Data;