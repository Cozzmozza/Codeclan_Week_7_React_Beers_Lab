import React from 'react';

const BeerSelect = ({beers, onSelectedBeer}) => {

    const handleChange = (event) => {
        const chosenBeer = beers[event.target.value];
        onSelectedBeer(chosenBeer)
    }

    const beerList = beers.map((beer, index) => {
        return <option value={index} key={index}>{beer.name}</option>
    })

   

    return(
        <select defaultValue="" onChange={handleChange}>
            <option value="" defaultValue='selected'>Choose a beer</option>
            {beerList}
        </select>
    )
}
export default BeerSelect;