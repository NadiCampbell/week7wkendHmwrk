import './App.css';
import PokemonContainer from './Container/PokemonContainer';

function App() {
  return (
    <div className="App">
      <h1>Pokémon</h1>
      <PokemonContainer/>

      {/* <select>
        <option value="" disabled >Pick A Pokemon</option>
        <option>Pikachu</option>
        <option>Bulbasaur</option>
        <option>Squirtle</option>
        <option>Charmeleon</option>
      </select> */}
    </div>
  );
}

export default App;
