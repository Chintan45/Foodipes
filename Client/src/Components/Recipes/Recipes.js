import React, { useState, useEffect } from 'react'

import FilterList from './Filter/FilterList';
import RecipeList from './RecipeList';
import SearchBar from './SearchBar';
import './Styles/recipes.css'

const Recipes = () => {
    const [filterType, setFilterType] = useState('all');
    useEffect(() => {
        document.title = 'Explore Recipes';
    }, [])

    return (
        <div className="recipes-outer-container">
            <div className="filter-container" data-aos="fade-in" data-aos-once="true"
                data-aos-delay="800" data-aos-duration="800">
                <FilterList setFilterType={setFilterType} />
                {/* <button onClick={printer}>ddd</button> */}
            </div>
            <div className="listing-container" data-aos="fade-in" data-aos-once="true"
                data-aos-delay="1000" data-aos-duration="800">
                <SearchBar />
                <RecipeList filterType={filterType} />
            </div>
        </div>
    )
}

export default Recipes;