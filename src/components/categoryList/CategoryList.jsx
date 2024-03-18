import Data from "./data";
import React from 'react';
import { useSelector } from "react-redux";

const filterCategory = (filterKey) => {
    console.log(filterKey);
}

function CategoryList() {
    const data = Data();
    const direction = useSelector((state) => state.direction);

    return (
        <div style={{direction }} className="flex justify-center gap-5 my-5 overflow-auto">
        {
            data.map((item, index) => {
                return (
                    <button className="px-2 lg:px-6 md:px-4 text-xs py-2 border-[2px] rounded-xl text-gray-50" onClick={() => filterCategory(item.click)} key={index}>
                        {item.title}
                    </button>
                )
            })
        }
        </div>
    );
}

export default CategoryList;