import React, { useState } from 'react'; 
import './PokemonDetails.css'

const PokemonDetails = ({response, chosenPokemon}) => {

    const [favouritePokemon, setFavouritePokemon] = useState([]);

    const handleAddToFavourites = () => {
        const alreadyAdded = favouritePokemon.find((x)=> {
           return x === chosenPokemon
        })
        if (!alreadyAdded){
            setFavouritePokemon((previousState)=> {
                return [
                    ...previousState, 
                    chosenPokemon
                ]
            })
        }
       
    }



    return (
        <>
        <p>Special Abilities:</p>
        
        <ul className="li-style">
            {response.abilities.map((ability, index) => <li key={index}>{ability?.ability?.name}</li>)}
            <hr className="hr"></hr>
            <p>Special Moves:</p>
            {response.moves.map((moves, index) => <li key={index}>{moves.move.name}</li>).slice(0,3)}
        </ul>
        <button onClick={handleAddToFavourites}>Add To Favourites</button>
        <p>Favourite Pokémon:</p>
        {favouritePokemon.map((fav, index) => <li key={index}>{fav}</li>)}

        </>
    )
}

export default PokemonDetails;