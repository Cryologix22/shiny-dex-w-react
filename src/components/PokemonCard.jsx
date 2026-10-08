import React, { useRef, useState } from "react";
import PlayCry from "./PlayCry";
import "./PokemonCard.css";

const typeColors = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

const PokemonCard = ({ pokemon, onSelect }) => {
  const audioRef = useRef(null);
  const [isShiny, setIsShiny] = useState(true);
  const sprite = isShiny
    ? pokemon.sprites.front_shiny
    : pokemon.sprites.front_default;
  const primaryType = pokemon.types[0]?.type.name;
  const secondaryType = pokemon.types[1]?.type.name;
  const color1 = typeColors[primaryType] || "#555";
  const color2 = secondaryType ? typeColors[secondaryType] : color1;
  const cry = pokemon.cries?.latest || pokemon.cries?.legacy;

  return (
    <div
      className="pokemon__card"
      style={{
        background: `linear-gradient(135deg, ${color1}, ${color2})`,
      }}
    >
      <span className="pokemon__number">
        #{String(pokemon.id).padStart(4, "0")}
      </span>
      <span className="pokemon__name">{pokemon.name}</span>
      <span className="pokemon__measurements">
        Height: {(pokemon.height * 3.937007874).toFixed(1)} in
        <br />
        Weight: {(pokemon.weight * 0.220462262).toFixed(1)} lbs
      </span>
      <div className="pokemon__visual">
        <button
          type="button"
          className="pokemon__image-button"
          onClick={() => onSelect?.(pokemon)}
          aria-label={`Enlarge ${pokemon.name}`}
        >
          <img
            src={sprite}
            className="pokemon__image"
            alt={`${isShiny ? "Shiny" : "Regular"} ${pokemon.name}`}
          />
        </button>
        <button
          type="button"
          className="pokemon__form-toggle"
          onClick={() => setIsShiny((prev) => !prev)}
          aria-label={`Switch to ${isShiny ? "regular" : "shiny"} ${pokemon.name}`}
        >
          {isShiny ? "✨ Shiny" : "⚪ Regular"}
        </button>
      </div>
      <div className="pokemon__types">
        {pokemon.types.map(({ type }) => (
          <span key={type.name} className={`type type--${type.name}`}>
            {type.name}
          </span>
        ))}
      </div>
      <audio ref={audioRef} src={cry || undefined} />
      <PlayCry audioRef={audioRef} hasCry={Boolean(cry)} />
    </div>
  );
};

export default PokemonCard;