import React, { useRef } from "react";
import PlayCry from "./PlayCry";
import './PokemonCard.css'

const PokemonCard = ({ pokemon }) => {
  const audioRef = useRef(null);

  return (
  <div className='pokemon__card'>
    <span className='pokemon__number'>
      {pokemon.id}
    </span>
    <span className='pokemon__name'>
      {pokemon.name}
    </span>
    <span className='pokemon__measurements'>
      Height: {pokemon.height} in
      <br />
      Weight: {pokemon.weight} lbs
    </span>
    <img
  src={pokemon.sprites.front_shiny}
  className='pokemon__image'
  alt={`Shiny ${pokemon.name}`}
    />
    {pokemon.types.map((type) => {
  return (
  <span className={`type type--${type.type.name}`}>
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
