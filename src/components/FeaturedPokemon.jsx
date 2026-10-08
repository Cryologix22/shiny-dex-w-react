import { useEffect, useRef, useState } from "react";
import PlayCry from "./PlayCry";
import "./FeaturedPokemon.css";
import { fetchPokemonDescription } from "../utils/fetchPokemonSpecies";

const FeaturedPokemon = ({ pokemon }) => {
  const [featuredPokemon, setFeaturedPokemon] = useState(null);
  const audioRef = useRef(null);
  const [description, setDescription] = useState("");
  const [descriptionLoading, setDescriptionLoading] = useState(false);

  const choosePokemon = () => {
    if (!pokemon.length) return;

    const randomIndex = Math.floor(Math.random() * pokemon.length);

    setFeaturedPokemon(pokemon[randomIndex]);
  };

  useEffect(() => {
    if (pokemon.length) {
      const randomIndex = Math.floor(Math.random() * pokemon.length);
      setFeaturedPokemon(pokemon[randomIndex]);
    }
  }, [pokemon]);

  useEffect(() => {
    if (!featuredPokemon) return;

    let cancelled = false;

    const loadDescription = async () => {
      setDescription("");
      setDescriptionLoading(true);

      try {
        const text = await fetchPokemonDescription(featuredPokemon.id);

        if (!cancelled) {
          setDescription(text);
        }
      } catch (error) {
        console.error("Featured Pokémon description failed:", error);

        if (!cancelled) {
          setDescription("Pokédex entry temporarily unavailable.");
        }
      } finally {
        if (!cancelled) {
          setDescriptionLoading(false);
        }
      }
    };

    loadDescription();

    return () => {
      cancelled = true;
    };
  }, [featuredPokemon]);

  if (!featuredPokemon) return null;

  const primaryType = featuredPokemon.types[0]?.type.name;
  const secondaryType = featuredPokemon.types[1]?.type.name;

  return (
    <section className="featured">
      <div className="featured__heading">
        <p>Shiny Spotlight</p>
        <h2>Featured Pokémon</h2>
      </div>
      <div className="featured__card">
        <div className="featured__visual">
          <div className="featured__floating">
            <div className="featured__sprite-glow"></div>

            <img
              src={featuredPokemon.sprites.front_shiny}
              alt={`Shiny ${featuredPokemon.name}`}
              className="featured__image"
            />
          </div>
        </div>
        <div className="featured__info">
          <span className="featured__id">
            #{String(featuredPokemon.id).padStart(3, "0")}
          </span>
          <h3>{featuredPokemon.name}</h3>
          <div className="featured__types">
            <span className={`type type--${primaryType}`}>{primaryType}</span>
            {secondaryType && (
              <span className={`type type--${secondaryType}`}>
                {secondaryType}
              </span>
            )}
          </div>
          <div className="featured__description">
            <span className="featured__description-label">POKÉDEX ENTRY</span>

            <p>
              {descriptionLoading
                ? "Consulting Professor Oak's research..."
                : description}
            </p>
          </div>
          <div className="featured__stats">
            <div>
              <span>Height</span>
              <strong>
                {(featuredPokemon.height * 3.937007874).toFixed(1)} in
              </strong>
            </div>
            <div>
              <span>Weight</span>
              <strong>
                {(featuredPokemon.weight * 0.220462262).toFixed(1)} lbs
              </strong>
            </div>
          </div>
          <div className="featured__actions">
            <audio
              ref={audioRef}
              src={
                featuredPokemon.cries?.latest ||
                featuredPokemon.cries?.legacy ||
                undefined
              }
            />

            <PlayCry
              audioRef={audioRef}
              hasCry={Boolean(
                featuredPokemon.cries?.latest || featuredPokemon.cries?.legacy,
              )}
            />
            <button className="featured__discover" onClick={choosePokemon}>
              ✦ Discover Another
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPokemon;
