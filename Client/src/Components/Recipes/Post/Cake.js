// https://chelsweets.com/funfetti-cupcakes/

import { useEffect } from 'react'
import Post from './Post';
import './post.css'

const Cake = () => {
    useEffect(() => {
        document.title = "Cupcake recipe"
    }, []);


    return (
        <Post recipe_name="cupcake" />
    )
}

export default Cake;
