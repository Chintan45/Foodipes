//#### https://spendwithpennies.com/wprm_print/138464 ###

import { useEffect } from 'react'
import Post from './Post';
import './post.css'

const Pasta = () => {
    useEffect(() => {
        document.title = "Pasta recipe"
    }, []);


    return (
        <Post recipe_name="pasta" />
    )
}

export default Pasta;
