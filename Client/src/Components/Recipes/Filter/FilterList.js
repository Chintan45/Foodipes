

import Filter from './Filter'
import './Styles/filter.css';

const FilterList = ({ setFilterType }) => {
    const clearFilter = () => {
        setFilterType('all')
        document.getElementById("fForm").reset();
    }
    return (
        <div className="f-container">
            <h2>Recipes 👩‍🍳</h2>
            <div className="row" id="f-row">
                <p className="F-heading">Filter by:</p>
                <p className="shortText" onClick={clearFilter}>Clear Filter</p>
            </div>
            <form method='POST' id="fForm" >
                <Filter filterName="Meal" setFilterType={setFilterType} />
                <Filter filterName="Popularity" setFilterType={setFilterType} />
                <Filter filterName="Rating" setFilterType={setFilterType} />
            </form>
        </div>
    )
}

export default FilterList;

