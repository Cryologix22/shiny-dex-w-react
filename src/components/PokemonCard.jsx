import React from "react";

const PokemonCard = ({ pokemon }) => {
  return (
  <div className='pokemon__card'>
    {pokemon.id}
    {pokemon.name}
    {pokemon.height}
    {pokemon.weight}
    <img
  src={pokemon.sprites.front_shiny}
  alt={`Shiny ${pokemon.name}`}
    />
    {pokemon.types.map((type) => {
  return (
  <span>
    {type.type.name}
  </span>
  );
})}
    </div>
)
};

export default PokemonCard;
