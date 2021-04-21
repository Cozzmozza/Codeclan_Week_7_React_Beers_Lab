import React, {useState, useEffect} from 'react';
import BeerSelect from '../components/BeerSelect.js'
import BeerDetail from '../components/BeerDetail.js'
import BeerFavourites from '../components/BeerFavourites.js'

const BeerContainer = () => {
    const [beers, setBeers] = useState([]);
    const [selectedBeer, setSelectedBeer] = useState(null);
    const [favouriteBeers, setFavouriteBeers] = useState([]);

    useEffect(() => {
        getBeers();
    }, [])

    const getBeers = () => {
        fetch('https://api.punkapi.com/v2/beers')
        .then(response => response.json())
        .then(beers => setBeers(beers))
    }

    const onSelectedBeer = (beer) => setSelectedBeer(beer);

    const addFavouriteBeer = (newFavouriteBeer) => {
        const updatedFavouriteBeers = [...favouriteBeers, newFavouriteBeer];
        setFavouriteBeers(updatedFavouriteBeers);
    }

    const removeFavouriteBeer = (favouriteBeer) => {
        const updatedFavouriteBeers = favouriteBeers.splice(favouriteBeer.index, 1);
        setFavouriteBeers(updatedFavouriteBeers);
    }

    // const beerChecker = (beer) => {
    //     const ifFound = favouriteBeers.find((beer) => {
    //     if (ifFound === true){
    //         removeFavouriteBeer(beer)
    //     }
        
    //         // addFavouriteBeer(beer)
        
    // })
    // }

    // const found = array1.find(element => element > 10);

    // const beerChecker = (beer) => {favouriteBeers.find(beer => beer)}
    //     const found = favouriteBeers.find(beer => beer)
    // }

    return(
        <div>
            <BeerSelect beers={beers} onSelectedBeer={onSelectedBeer}/>
            {selectedBeer ? <BeerDetail selectedBeer={selectedBeer} beerChecker={beerChecker}/> : null}

            {favouriteBeers.length > 0 ? <BeerFavourites favouriteBeers={favouriteBeers} /> : null}
            {/* <BeerFavourites favouriteBeers={favouriteBeers} /> */}
        
        </div>
    )
}

export default BeerContainer;