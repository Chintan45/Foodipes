// https://chelsweets.com/funfetti-cupcakes/

import { useEffect } from 'react'
import Post from './Post';
import './post.css'
import ReactGA from 'react-ga4'

const Cake = () => {
    useEffect(() => {
        document.title = "Cupcake recipe"
        ReactGA.send({
            hitType: "pageView",
            page: window.location.pathname
        })
    }, []);


    return (
        <Post recipe_name="cupcake" />
    )
}

export default Cake;
