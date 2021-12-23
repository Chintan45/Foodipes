
import { FaSearch } from 'react-icons/fa'
import './Styles/recipes.css';

const SearchBar = () => {
    return (
        <div className="search-bar">
            <FaSearch className="search" />
            <input type="text" placeholder="Search what you want..." className="search-box" />
        </div>
    )
}

export default SearchBar;