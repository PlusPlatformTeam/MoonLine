import webLogo from '../../assets/images/weAppLogo.png';
import designLogo from '../../assets/images/designLogo.png';
import adLogo from '../../assets/images/AddContentLogo.png';
import langData from '../../lang/lang-fa';

const data = [
    {logo: webLogo, title: langData.services.webAppTitle, desc: langData.services.webAppDesc, bgColor: "blue-light-gradiant", color: "blue"},
    {logo: designLogo, title: langData.services.designTitle, desc: langData.services.designDesc, bgColor: "green-light-gradiant", color: "green"},
    {logo: adLogo, title: langData.services.adTitle, desc: langData.services.adDesc, bgColor: "yellow-light-gradiant", color: "yellow"}
];

export default data;