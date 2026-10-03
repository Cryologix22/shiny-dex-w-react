import React, { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";
import './Home.css'
import { fetchPokemonRange } from "../utils/fetchPokemon";

const Home = () => {
  const [kantoPokemon, setKantoPokemon] = useState([]);

 useEffect(() => {
  async function loadKantoPokemon() {
    const allPokemon = await fetchPokemonRange(1, 151);

    setKantoPokemon(allPokemon);
  }

  loadKantoPokemon();
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
