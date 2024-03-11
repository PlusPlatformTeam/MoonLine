import pooya from '../../assets/images/pooya.png';
import ali from '../../assets/images/ali.png';
import farzad from '../../assets/images/farzad.png';
import shariar from '../../assets/images/shariar.png';
import zahra from '../../assets/images/zahra.png';
import { useTranslation } from 'react-i18next';

function Data() {
    const { t } = useTranslation();
    return [
        {img: ali, title: t('about.ali.name'), desc: t('about.ali.info'), bgColor: "rgba(14, 165, 233, 0.3)", color: "#0EA5E9", link: "httpa://ali.com", insta: "ali.oo", telegram: "alijaan0", linkedin: "alijaan22" , youtube: "ali.com"},
        {img: shariar, title: t('about.shahriar.name'), desc: t('about.shahriar.info'), bgColor: "rgba(22, 101, 52, 0.3)", color: "#166534", link: "httpa://ali.com", insta: "ali.oo", telegram: "alijaan0", linkedin: "alijaan22" , youtube: "ali.com"},
        {img: zahra, title: t('about.zahra.name'), desc: t('about.zahra.info'), bgColor: "rgba(253, 186, 116, 0.3)", color: "#FDBA74", link: "httpa://ali.com", insta: "ali.oo", telegram: "alijaan0", linkedin: "alijaan22" , youtube: "ali.com"},
        {img: farzad, title: t('about.farzad.name'), desc: t('about.farzad.info'), bgColor: "rgba(30, 64, 175, 0.3)", color: "#1E40AF", link: "httpa://ali.com", insta: "ali.oo", telegram: "alijaan0", linkedin: "alijaan22" , youtube: "ali.com"},
        {img: pooya, title: t('about.pooya.name'), desc: t('about.pooya.info'), bgColor: "rgba(249, 115, 22, 0.3)", color: "#F97316", link: "httpa://ali.com", insta: "ali.oo", telegram: "alijaan0", linkedin: "alijaan22" , youtube: "ali.com"},
    ];
}

export default Data;