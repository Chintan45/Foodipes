/// https://www.spendwithpennies.com/wprm_print/224369


import { useEffect } from 'react';
import './post.css'
import Post from "./Post";
import ReactGA from 'react-ga4'
const Pizza = () => {

    useEffect(() => {
        document.title = "Pizza Recipe"
        ReactGA.send({
            hitType: "pageView",
            page: window.location.pathname
        })
    }, []);

    return (
        <Post recipe_name="pizza" />
    )
}

export default Pizza;
