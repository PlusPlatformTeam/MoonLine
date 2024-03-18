import Navbar from "../../components/navbar/Navbar";
import CategoryList from "../../components/categoryList/CategoryList";
import React from 'react';
import "./resume.css";
import Gallery from "./Gallery";

function Resume() {
    return (
        <div className="gradiant-bottom-light">
            <Navbar />
            <CategoryList />    
            <Gallery />
        </div>
    )
}
export default Resume;
