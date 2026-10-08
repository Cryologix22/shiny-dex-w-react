import React, { useRef } from "react";
import PlayCry from "./PlayCry";
import './PokemonCard.css'

const PokemonCard = ({ pokemon }) => {
  const audioRef = useRef(null);

  const typeColors = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
  }
  const primaryType = pokemon.types[0].type.name;
  const secondaryType = pokemon.types[1]?.type.name;
  const color1 = typeColors[primaryType];
  const color2 = secondaryType
  ? typeColors[secondaryType]
  : color1;

  return (
  <div
  className='pokemon__card'
  style={{
    background: `linear-gradient(135deg, ${color1}, ${color2})`,
    }}>
    <span className='pokemon__number'>
      {pokemon.id}
    </span>
    <span className='pokemon__name'>
      {pokemon.name}
    </span>
    <span className='pokemon__measurements'>
      Height: {(pokemon.height * 3.937007874).toFixed(1)} in
      <br />
      Weight: {(pokemon.weight * 0.220462262).toFixed(1)} lbs
    </span>
    <img
  src={pokemon.sprites.front_shiny}
  className='pokemon__image'
  alt={`Shiny ${pokemon.name}`}
    />
    {pokemon.types.map((type) => {
  return (
  <span 
  key={type.type.name}
  className={`type type--${type.type.name}`}>
  {type.type.name}
</span>
  );
})}
    <audio
  ref={audioRef}
  src={pokemon.cries?.latest || pokemon.cries?.legacy || undefined}
/>
<PlayCry audioRef={audioRef} hasCry={Boolean(pokemon.cries?.latest || pokemon.cries?.legacy)} />
    </div>
)
};

export default PokemonCard;
