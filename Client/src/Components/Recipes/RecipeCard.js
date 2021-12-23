import { Link } from 'react-router-dom';
import { FaRegStar } from 'react-icons/fa';
import './Styles/recipes.css'

const RecipeCard = ({ gif, url, alt, title, rating, author }) => {
    let src;
    gif ? src = `./images/${gif}` : src = `./images/${url}2.jpg`;
    let linkTo = `/recipes/${url}`;
    return (
        <Link to={linkTo} style={{ textDecoration: "none" }}>
            <div className="recipe-card" data-aos="fade-in" data-aos-once="true"
                data-aos-delay="200" data-aos-duration="800">
                <img src={src} alt={alt} className="recipe-thumbnail" loading="lazy" />
                <h3>{title}</h3>
                <p className="p-rate"><FaRegStar /> {rating}</p>
                <p className="p-auth">{author}</p>
            </div>
        </Link>
    )
}

export default RecipeCard;