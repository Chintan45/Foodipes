//#### https://spendwithpennies.com/wprm_print/138464 ###

import { useEffect } from 'react'
import Post from './Post';
import './post.css'
import ReactGA from 'react-ga4'

const Pasta = () => {
    useEffect(() => {
        document.title = "Pasta recipe"
        ReactGA.send({
            hitType: "pageView",
            page: window.location.pathname
        })
    }, []);


    return (
        <Post recipe_name="pasta" />
    )
}

export default Pasta;
