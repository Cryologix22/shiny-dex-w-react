import { useEffect, useRef, useState } from "react";
import PlayCry from "./PlayCry";
import "./PokemonModal.css";
import { fetchPokemonDescription } from "../utils/fetchPokemonSpecies";

const PokemonModal = ({ pokemon, onClose }) => {
  const [isShiny, setIsShiny] = useState(false);
  const audioRef = useRef(null);
  const closeRef = useRef(null);
  const [description, setDescription] = useState("");
  const [descriptionLoading, setDescriptionLoading] = useState(true);
  const [descriptionError, setDescriptionError] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;

    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "Tab") {
        const focusable = Array.from(
          document.querySelectorAll(
            ".pokemon-modal__panel button:not(:disabled)",
          ),
        );

        if (!focusable.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus?.();
    };
  }, [onClose]);

  useEffect(() => {
    let cancelled = false;

    const loadDescription = async () => {
      setDescriptionLoading(true);
      setDescriptionError(false);
      setDescription("");

      try {
        const text = await fetchPokemonDescription(pokemon.id);

        if (!cancelled) {
          setDescription(text);
        }
      } catch (error) {
        console.error("Failed to load Pokédex description:", error);

        if (!cancelled) {
          setDescriptionError(true);
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
  }, [pokemon.id]);

  const officialArtwork = pokemon.sprites.other?.["official-artwork"];
  const artwork =
    (isShiny ? officialArtwork?.front_shiny : officialArtwork?.front_default) ||
    (isShiny ? pokemon.sprites.front_shiny : pokemon.sprites.front_default);

  const cry = pokemon.cries?.latest || pokemon.cries?.legacy;

  return (
    <div
      className="pokemon-modal__overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        className="pokemon-modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="pokemon-modal-title"
      >
        <button
          ref={closeRef}
          type="button"
          className="pokemon-modal__close"
          onClick={onClose}
          aria-label="Close Pokémon details"
        >
          ✕
        </button>
        <span className="pokemon-modal__number">
          #{String(pokemon.id).padStart(4, "0")}
        </span>
        <div className="pokemon-modal__artwork">
          <img
            src={artwork}
            alt={`${isShiny ? "Shiny" : "Regular"} ${pokemon.name}`}
          />
        </div>
        <h2 id="pokemon-modal-title">{pokemon.name}</h2>
        <div className="pokemon-modal__types">
          {pokemon.types.map(({ type }) => (
            <span key={type.name} className={`type type--${type.name}`}>
              {type.name}
            </span>
          ))}
        </div>
        <div className="pokemon-modal__description">
          <span className="pokemon-modal__description-label">
            POKÉDEX ENTRY
          </span>

          {descriptionLoading ? (
            <p>Consulting Professor Oak's research...</p>
          ) : descriptionError ? (
            <p>Pokédex entry temporarily unavailable.</p>
          ) : (
            <p>{description}</p>
          )}
        </div>
        <div className="pokemon-modal__stats">
          <div>
            <span>Height</span>
            <strong>{(pokemon.height * 3.937007874).toFixed(1)} in</strong>
          </div>
          <div>
            <span>Weight</span>
            <strong>{(pokemon.weight * 0.220462262).toFixed(1)} lbs</strong>
          </div>
        </div>
        <div className="pokemon-modal__actions">
          <button
            type="button"
            className="pokemon-modal__toggle"
            onClick={() => setIsShiny((current) => !current)}
          >
            {isShiny ? "✨ Shiny Artwork" : "Regular Artwork"}
            <span> · Switch Form</span>
          </button>
          <audio ref={audioRef} src={cry || undefined} />
          <PlayCry audioRef={audioRef} hasCry={Boolean(cry)} />
        </div>
      </section>
    </div>
  );
};

export default PokemonModal;
