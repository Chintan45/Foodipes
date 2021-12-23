import React, { useEffect } from 'react';
import Recipes from "../Recipes/Recipes"
import Banner from "./Banner/Banner"

const Home = ({ setActive }) => {

    useEffect(() => {
        document.title = `Foodipes: Find premium recipes ...`;
    }, [])


    return (
        <div>
            <Banner setActive={setActive} />
            <Recipes />
        </div>
    )
}

export default Home;