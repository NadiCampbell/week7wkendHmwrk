import React, {useState, useEffect} from 'react'; 


const PokemonContainer = () => {
    
    const [pokemon, setPokemon] = useState([]);
    const [chosenPokemon, setChosenPokemon] = useState(null);
    const [response, setResponse] = useState(null);
    
    useEffect(() => {
        fetchPokemon();
    }, []);

    
    const fetchPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response => response.json())
        .then(pokemonData => setPokemon(pokemonData))
    }

    useEffect(() => {
        if(chosenPokemon) {
            fetchSpecificPokemon();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chosenPokemon]);

    
    const fetchSpecificPokemon = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${chosenPokemon}`)
        .then(response => response.json())
        .then(pokemonData => setResponse(pokemonData))
    }


    return (
        <>
       <select onChange={(e) => setChosenPokemon(e.target.value)}>
       <option>Pick A Pokemon</option>
        {pokemon.results?.map((x, index) => {
            return <option key={index}>{x.name}</option>
        })}
       </select><br></br>

        {response && (
            <>
            <p>special abilities:</p>
            <ul>
                {response.abilities.map((y) => <li>{y?.ability?.name}</li>)}
                <hr></hr>
                

            </ul>
            
            </>
        )}
       </>
    )

}

export default PokemonContainer;