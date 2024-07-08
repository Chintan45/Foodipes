import { useState, useEffect } from 'react'
import axios from 'axios';
import RecipeCard from './RecipeCard';
import Skeleton from '@mui/material/Skeleton';

import './Styles/recipes.css';

const RecipeList = ({ filterType }) => {

    const [CardData, setCardData] = useState([]);
    const [loading, setLoading] = useState(true);

    const API = process.env.REACT_APP_API;
    const baseURL = `${API}/recipes_data`;

    const filterData = (data, filterType) => {
        if (filterType === "all") {
            return data;
        }
        return data.filter(li => li.keywords.includes(filterType));
    }

    
    useEffect(() => {
        const getData = async () => {
            try {
                await axios
                    .get(baseURL)
                    .then(res => {
                        // console.log(res.data);
                        let fData = filterData(res.data, filterType)
                        setCardData(fData);
                    })
                    .finally(() => {
                        setLoading(false);
                    })
            }
            catch (e) {
                console.log(e)
            }
        }
        getData();
    }, [baseURL, filterType]);


    if (loading) {
        return (
            <div className="list-container">
                {[...Array(9)].map((e, i) => <RecipeLoading key={i} />)}
            </div>
        )
    }

    return (
        <div className="list-container">

            {CardData.map((item, index) => {
                return (
                    <RecipeCard
                        url={item.url}
                        alt={item.title}
                        title={item.title}
                        rating={item.rating}
                        author={item.author}
                        key={index}
                    />
                )
            })}

        </div>

    );

}
export default RecipeList;

const RecipeLoading = () => {
    return (
        <div className="recipe-card" >
            <Skeleton variant='rectangle' className="recipe-thumbnail" />
            <Skeleton width={80} />
            <Skeleton className="p-rate" width={30} />
            <Skeleton className="p-auth" width={60} />
        </div>
    )
}