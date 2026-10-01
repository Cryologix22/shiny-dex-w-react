import React, { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";
import './Home.css'

const Home = () => {
  const [kantoPokemon, setKantoPokemon] = useState([]);

  useEffect(() => {
    async function fetchPokemon(id) {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

      const data = await res.json();

      return data;
    }

    async function fetchKantoPokemon() {
      const pokemonPromises = [];

      for (let i = 1; i <= 151; i++) {
        pokemonPromises.push(fetchPokemon(i));
      }

      const allPokemon = await Promise.all(pokemonPromises);

      console.log(allPokemon);
      setKantoPokemon(allPokemon);
    }

    fetchKantoPokemon();
  }, []);

  return (
    <div className="coming-soon">
      <h1>
        <span className="shiny">Shiny</span>{" "}
        <span className="dex">Dex</span>
      </h1>
      <p>Coming soon...</p>
    <div className='pokemon__grid'>
  {kantoPokemon.map((pokemon) => {
    return (
      <PokemonCard
      key={pokemon.id}
      pokemon={pokemon}
      />
    );
  })}
</div>
  </div>
  );
};

export default Home;
