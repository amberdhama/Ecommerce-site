import React from "react";
import CategoriesCol from "./CategoriesCol";
import img from "./ImgDetails";

function Categories() {
    return (
        <div className="categories">
            <div className="smallcontainer">
                <div className="row">
                    {img.map((index)=>(<CategoriesCol key={index.id} img={index.img1} /> ))}
                </div>
            </div>
        </div>
    );
}

export default Categories;
