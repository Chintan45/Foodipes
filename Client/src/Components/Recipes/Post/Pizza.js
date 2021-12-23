/// https://www.spendwithpennies.com/wprm_print/224369


import { useEffect } from 'react';
import './post.css'
import Post from "./Post";

const Pizza = () => {

    useEffect(() => {
        document.title = "Pizza Recipe"
    }, []);

    return (
        <Post recipe_name="pizza" />
    )
}

export default Pizza;
