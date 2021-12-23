


import './Styles/filter.css';

const Filter = ({ filterName, setFilterType }) => {

    const handleClick = () => {
        setFilterType(filterName);
    }

    return (
        <>
            <div className="row">
                <p className="F-heading"> {filterName} </p>
                <label>
                    <input type="radio" name="filter" value={filterName} onClick={handleClick} className="radioFilter" />
                </label>
            </div>
        </>
    );
}

export default Filter;
