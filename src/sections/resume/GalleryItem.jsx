import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const GalleryItem = ({ item }) => {
    const direction = useSelector((state) => state.direction);
    const { t } = useTranslation();

    return (
        <div className="grid gap-4">
            <div className="relative">
                <img
                    className="h-full max-w-full rounded-lg"
                    src={item.cover}
                    alt={item.github}
                    loading="lazy"
                />
                <div className="flex flex-col justify-between p-2 py-8 rounded-lg hover-resume-card">
                    <div className="">
                        <p className="text-white animate-slide-right lg:text-base text-sm" style={{ direction }}>
                            {item.desc}
                        </p>
                    </div>
                    <div style={{ direction: direction === 'ltr' ? 'rtl' : 'ltr' }} className="relative w-full">
                        <div className={`flex gap-4 text-white ${direction === 'ltr' ? 'animate-slide-right' : 'animate-slide-left'}`}>
                            { 
                                item.github 
                                && 
                                <a href={item.github} className="border-2 border-gray-50 rounded-lg text-sm py-1 px-2 lg:px-4 lg:text-base md:text-md">
                                    {t('github')}
                                </a> 
                            }
                            { 
                                item.demo 
                                && 
                                <a href={item.demo} className="border-2 border-gray-50 rounded-lg text-sm py-1 px-2 lg:px-4 lg:text-base md:text-md">
                                    {t('demo')}
                                </a> 
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryItem;
