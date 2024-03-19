import Navbar from "../../components/navbar/Navbar";
import LanguageSwitch from "../../components/languageSwitch/LanguageSwitch"
import CategoryList from "../../components/categoryList/CategoryList";
import React, {useState, useEffect} from 'react';
import { useLocation } from "react-router-dom";
import "./resume.css";
import Gallery from "./Gallery";
import Burger from "../../assets/images/burger.png";
import MobileNavbar from "../../components/mobileNavbar/MobileNavbar";
function Resume() {
    const [activeFilter, setActiveFilter] = useState('');
    const location = useLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const validCategories = ['develpment', 'design', 'advertise'];
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isMobileNavHidden, setIsMobileNavHidden] = useState(true);
    
    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
      
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const category = searchParams.get("category");
        if (validCategories.includes(category)) {
            setActiveFilter(category);
        }
        else {
            setActiveFilter('all');
        }
      }, [location.search, validCategories]);

    return (
        <div className="pb-8 overflow-hidden gradiant-bottom-light">
            <div className="hidden lg:block md:block sm:block">
                {windowWidth > 639 && <Navbar />}
            </div>
            <div dir="rtl" className="flex flex-wrap items-center justify-between w-full px-4 py-5 lg:px-6 md:px-6 lg:hidden md:hidden sm:hidden">
                <img onClick={() => { setIsMobileNavHidden(false) }} src={Burger} alt="burger icon" className="m-4 mx-0 w-[45px] h-[45px] rounded-full" />
                <LanguageSwitch />
            </div>
            <CategoryList setActiveFilter={setActiveFilter}/>    
            <Gallery activeFilter={activeFilter}/>
            <MobileNavbar isHidden={isMobileNavHidden} onHidden={setIsMobileNavHidden}/>
        </div>
    )
}
export default Resume;
