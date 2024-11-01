import React from "react";

function Filter({selectedCategory, onCategoryChange}){

    function handleCategoryChange(event) {
        onCategoryChange(event.target.value);
    }
    return(
        <select name="filter" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="All">Filter by category</option>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Dessert">Dessert</option>
        </select>
    )
}
export default Filter;
