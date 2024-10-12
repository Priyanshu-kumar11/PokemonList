
import './App.css'
import Display from './Component/Display'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './Component/SearchBar';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
        setPokemonData(response.data.results);
      } catch (error) {
        console.error('Error fetching the Pokémon data:', error);
      }
    };
    fetchData();
  }, []);

  const filteredPokemon = pokemonData.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <div className="container">
      <h1 className="text-center">Pokémon List</h1>
      
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="row">
        {filteredPokemon.map((pokemon, index) => (
          
          <Display key={index} name={pokemon.name} url={pokemon.url} />
        ))}
      </div>
    </div>
    </>
  )
}

export default App
