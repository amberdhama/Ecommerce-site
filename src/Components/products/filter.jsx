import React from "react";

function Filter(){
    return (
    <div className="row row-2">
            <h2>All Products</h2>
            <select>
                <option value="">Default Sorting</option>
                <option value="">Sort By Price</option>
                <option value="">Sort By Rating</option>
                <option value="">Sort By Popularity</option>
                <option value="">Sort By Sale</option>
            </select>
    </div>);
}
export default Filter;