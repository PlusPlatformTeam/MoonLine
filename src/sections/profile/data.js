import pooya from "../../assets/images/pooya.png";
import ali from "../../assets/images/ali.png";
import farzad from "../../assets/images/farzad.png";
import shariar from "../../assets/images/shariar.png";
import Emineh from "../../assets/images/emineh.JPG";
import { useTranslation } from "react-i18next";

function Data() {
  const { t } = useTranslation();
  return [
    {
      img: ali,
      title: t("about.ali.name"),
      desc: t("about.ali.info"),
      bgColor: "rgba(14, 165, 233, 0.3)",
      color: "#0EA5E9",
      link: "httpa://ali.com",
      insta: "ali.oo",
      telegram: "alijaan0",
      linkedin: "alijaan22",
      youtube: "http://www.google.com",
      job: t("about.ali.pro"),
    },
    {
      img: shariar,
      title: t("about.shahriar.name"),
      desc: t("about.shahriar.info"),
      bgColor: "rgba(22, 101, 52, 0.3)",
      color: "#166534",
      link: "httpa://ali.com",
      insta: "ali.oo",
      telegram: "alijaan0",
      linkedin: "alijaan22",
      youtube: "ali.com",
      job: t("about.shahriar.pro"),
    },
    {
      img: Emineh,
      title: t("about.Emineh.name"),
      desc: t("about.Emineh.info"),
      bgColor: "rgba(253, 186, 116, 0.3)",
      color: "#FDBA74",
      link: "httpa://ali.com",
      insta: "ali.oo",
      telegram: "alijaan0",
      linkedin: "alijaan22",
      youtube: "ali.com",
      job: t("about.Emineh.pro"),
    },
    {
      img: farzad,
      title: t("about.farzad.name"),
      desc: t("about.farzad.info"),
      bgColor: "rgba(30, 64, 175, 0.3)",
      color: "#1E40AF",
      link: "httpa://ali.com",
      insta: "ali.oo",
      telegram: "alijaan0",
      linkedin: "alijaan22",
      youtube: "ali.com",
      job: t("about.farzad.pro"),
    },
    {
      img: pooya,
      title: t("about.pooya.name"),
      desc: t("about.pooya.info"),
      bgColor: "rgba(249, 115, 22, 0.3)",
      color: "#F97316",
      link: "httpa://ali.com",
      insta: "ali.oo",
      telegram: "alijaan0",
      linkedin: "alijaan22",
      youtube: "ali.com",
      job: t("about.pooya.pro"),
    },
  ];
}

export default Data;
