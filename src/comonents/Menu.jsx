import React, { useState } from 'react';
import Carddd from './Carddd';
import cardData from './data.json';

function Menu() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState(cardData);

    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
        setFilteredData(
            cardData.filter((card) =>
                card.title.toLowerCase().includes(query)
            )
        );
    };

    const handleIconClick = () => {
        setFilteredData(
            cardData.filter((card) =>
                card.title.toLowerCase().includes(searchQuery)
            )
        );
    };

    return (
        <>
            <div className="headingdishh">
                <h1><b>All Days Dishes</b></h1>

                <input
                    type="text"
                    placeholder="Search dishes..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="search-input"
                />


                <div className="d-flex justify-content-between flex-wrap">
                    {filteredData.map((e, index) => (
                        <Carddd key={index} data={e} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Menu;
