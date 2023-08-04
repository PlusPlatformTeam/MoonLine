import pooya from '../../assets/images/pooya.png';
import { useTranslation } from 'react-i18next';

function Data() {
    const { t } = useTranslation();
    return [
        {img: pooya, title: t('about.pooya.name'), desc: t('about.pooya.pro'), bgColor: "bg-orange-400"},
        {img: pooya, title: t('about.ali.name'), desc: t('about.ali.pro'), bgColor: "bg-sky-500"},
        {img: pooya, title: t('about.shahriar.name'), desc: t('about.shahriar.pro'), bgColor: "bg-green-600"},
        {img: pooya, title: t('about.farzad.name'), desc: t('about.farzad.pro'), bgColor: "bg-gray-400"},
        {img: pooya, title: t('about.zahra.name'), desc: t('about.zahra.pro'), bgColor: "bg-pink-400"}
    ];
}

export default Data;