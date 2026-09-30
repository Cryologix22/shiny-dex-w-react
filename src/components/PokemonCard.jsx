import React, { useRef } from "react";
import PlayCry from "./PlayCry";

const PokemonCard = ({ pokemon }) => {
  const audioRef = useRef(null);

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
    <audio
  ref={audioRef}
  src={pokemon.cries.latest}
/>
<PlayCry audioRef={audioRef} />
    </div>
)
};

export default PokemonCard;
