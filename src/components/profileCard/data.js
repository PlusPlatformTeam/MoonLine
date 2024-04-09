import pooya from '../../assets/images/pooya.png';
import ali from '../../assets/images/ali.png';
import farzad from '../../assets/images/farzad.png';
import shariar from '../../assets/images/shariar.png';
import Emineh from '../../assets/images/emineh.JPG';
import { useTranslation } from 'react-i18next';

function Data() {
    const { t } = useTranslation();
    return [
        {img: ali, title: t('about.ali.name'), desc: t('about.ali.pro'), bgColor: "bg-sky-500", color:"#0EA5E9"},
        {img: shariar, title: t('about.shahriar.name'), desc: t('about.shahriar.pro'), bgColor: "bg-green-800", color:"#166534"},
        {img: Emineh, title: t('about.Emineh.name'), desc: t('about.Emineh.pro'), bgColor: "bg-orange-300", color:"#FDBA74"},
        {img: farzad, title: t('about.farzad.name'), desc: t('about.farzad.pro'), bgColor: "bg-blue-800", color:"#1E40AF"},
        {img: pooya, title: t('about.pooya.name'), desc: t('about.pooya.pro'), bgColor: "bg-orange-500", color:"#F97316"},

    ];
}

export default Data;