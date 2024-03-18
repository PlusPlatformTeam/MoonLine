import Navbar from "../../components/navbar/Navbar";
import CategoryList from "../../components/categoryList/CategoryList";
import React, {useState, useEffect} from 'react';
import { useLocation } from "react-router-dom";
import "./resume.css";
import Gallery from "./Gallery";

function Resume() {
    const [activeFilter, setActiveFilter] = useState('');
    const location = useLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const validCategories = ['develpment', 'design', 'advertise'];

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
        <div className="gradiant-bottom-light pb-8">
            <Navbar />
            <CategoryList setActiveFilter={setActiveFilter}/>    
            <Gallery activeFilter={activeFilter}/>
        </div>
    )
}
export default Resume;
