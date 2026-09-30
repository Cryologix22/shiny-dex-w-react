import React from 'react'

const Pokedex = () => {

  async function fetchPokemonData(pokemon) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    return null;
  }
}

const featuredPokemon = [
  "charizard",
  "gyarados",
  "dragonite",
  "gengar",
  "lapras",
  "moltres",
  "zapdos",
  "articuno",
  "mewtwo",
  "mew"
];


  return (
    <div>pokedex</div>
  )
}

export default Pokedex