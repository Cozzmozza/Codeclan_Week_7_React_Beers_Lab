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
        setFavouriteBeers([...favouriteBeers, newFavouriteBeer]);
    }

    const removeFavouriteBeer = (favouriteBeer) => {
        // const beerIndex = favouriteBeers.indexOf(favouriteBeer);
        // favouriteBeers.splice(beerIndex, 1);
        // console.log(`REMOVED ${favouriteBeer.name}`)
        // setFavouriteBeers(favouriteBeers);
        // The above seemed to work, but the favourites list only updated when I clicked on another beer..

        const newFavourites = favouriteBeers.filter(beer => {
            return beer.name !== favouriteBeer.name
        })
        setFavouriteBeers(newFavourites);
    }

    const beerChecker = (beer => {
        const found = favouriteBeers.find((beerCheck) => {
            return beerCheck.name === beer.name;
        })
        // found ? removeFavouriteBeer(beer) : addFavouriteBeer(beer)
        if (found){
            removeFavouriteBeer(beer)
        }
        else {
            addFavouriteBeer(beer)
        }
    });

    return(
        <div>
            <BeerSelect beers={beers} onSelectedBeer={onSelectedBeer}/>
            {selectedBeer ? <BeerDetail selectedBeer={selectedBeer} beerChecker={beerChecker}/> : null}

            {favouriteBeers.length > 0 ? <BeerFavourites favouriteBeers={favouriteBeers} /> : null}        
        </div>
    )
}

export default BeerContainer;