import React from 'react';

const BeerDetail = ({selectedBeer, beerChecker}) => {

    const handleClick = () => {
        beerChecker({selectedBeer})
    }

    return(
        <div>
        <h3>Beer name: {selectedBeer.name}</h3>
        <p>Description: {selectedBeer.description}</p>
        <p>ABV: {selectedBeer.abv}</p>
        <img src={selectedBeer.image_url} alt={`A picture of ${selectedBeer.name}`}></img>

        <button onClick={handleClick}>Add/Remove from favourites</button>
        </div>
    )
}

export default BeerDetail