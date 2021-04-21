import React from 'react';

const BeerDetail = ({selectedBeer, beerChecker}) => {

    const handleAddClick = () => {
        addFavouriteBeer(selectedBeer)
    }

    const handleRemoveCLick = () => {
        removeFavouriteBeer(selectedBeer)
    }

    return(
        <div>
        <h3>Beer name: {selectedBeer.name}</h3>
        <p>Description: {selectedBeer.description}</p>
        <p>ABV: {selectedBeer.abv}</p>
        <img src={selectedBeer.image_url} alt={`A picture of ${selectedBeer.name}`}></img>

        <button onClick={handleAddClick}>Add to favourites</button>
        <button onClick={handleRemoveClick}>Remove from favourites</button>
        </div>
    )
}

export default BeerDetail