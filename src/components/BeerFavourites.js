import React from 'react';
import BeerFave from './BeerFave'

const BeerFavourites = ({favouriteBeers}) => {

    const favouritesList = favouriteBeers.map((favourite, index) => {
        return(
            <BeerFave favourite={favourite} key={index} />
        )
    });

    return(
        <div>
            <h3>Favourite Beer List:</h3>
            <ul>
                {favouritesList}
            </ul>
        </div>
    )
}


export default BeerFavourites;