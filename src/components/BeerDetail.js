import React from 'react';

const BeerDetail = ({selectedBeer, beerChecker}) => {

    const handleClick = (faveBeer) => {
        beerChecker(faveBeer)
    }

    return(
        <div>
        <h3>Beer name: {selectedBeer.name}</h3>
        <p>Description: {selectedBeer.description}</p>
        <p>ABV: {selectedBeer.abv}</p>
        <img src={selectedBeer.image_url} alt={` of ${selectedBeer.name}`}></img>

        <button onClick={()=>handleClick(selectedBeer)}>Add/Remove from favourites</button>
        {/* Button also works if we just do onClick={handleClick} and const handleclick = () */}
        </div>
    )
}

export default BeerDetail