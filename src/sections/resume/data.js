import { useTranslation } from 'react-i18next';

const image1 = "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg";
const image2 = "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg";
const image3 = "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg";
const image4 = "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg";
const image5 = "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg";
const image6 = "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg";
const image7 = "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg";
const image8 = "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg";
const image9 = "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg";
const image10 = "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg";
const image11 = "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg";

function Data() {
    const { t } = useTranslation();
    return [
        {cover: image1, github: "https://github.com", desc: t('services.webAppDesc'), bgColor: "white", color: "blue", demo: "yes"},
        {cover: image2, github: "https://github.com", desc: t('services.designDesc'), bgColor: "black", color: "green", demo: ""},
        {cover: image3, github: "", desc: t('services.adDesc'), bgColor: "white", color: "yellow", demo: ""},
        {cover: image4, github: "https://github.com", desc: t('services.webAppDesc'), bgColor: "white", color: "blue", demo: "yes"},
        {cover: image5, github: "https://github.com", desc: t('services.designDesc'), bgColor: "black", color: "green", demo: ""},
        {cover: image6, github: "", desc: t('services.adDesc'), bgColor: "white", color: "yellow", demo: ""},
        {cover: image7, github: "https://github.com", desc: t('services.webAppDesc'), bgColor: "white", color: "blue", demo: "yes"},
        {cover: image8, github: "https://github.com", desc: t('services.designDesc'), bgColor: "black", color: "green", demo: ""},
        {cover: image9, github: "", desc: t('services.adDesc'), bgColor: "white", color: "yellow", demo: ""},
        {cover: image10, github: "https://github.com", desc: t('services.webAppDesc'), bgColor: "white", color: "blue", demo: "yes"},
        {cover: image11, github: "https://github.com", desc: t('services.designDesc'), bgColor: "black", color: "green", demo: ""},
        
    ];
}

export default Data;