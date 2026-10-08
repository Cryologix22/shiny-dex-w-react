import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import regions from "../data/regions";
import { fetchPokemonRange } from "../utils/fetchPokemon";
import PokemonCard from "../components/PokemonCard";
import PokemonSkeleton from "../components/PokemonSkeleton";
import RegionCard from "../components/RegionCard";
import Grid from "../components/Grid";
import "./Pokedex.css";
import PokemonModal from "../components/PokemonModal";

const Pokedex = () => {
  const { region } = useParams();
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const selectedRegion = regions.find((item) => item.slug === region);

  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!selectedRegion) return;

    let cancelled = false;

    const loadRegionPokemon = async () => {
      setLoading(true);
      setPokemon([]);
      setError("");

      try {
        const allPokemon = await fetchPokemonRange(
          selectedRegion.startId,
          selectedRegion.endId,
        );

        await new Promise((resolve) => setTimeout(resolve, 2000));

        if (!cancelled) {
          setPokemon(allPokemon);
        }
      } catch (err) {
        console.error("Failed to load region:", err);

        if (!cancelled) {
          setError("We couldn't load this region. Please try again.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadRegionPokemon();

    return () => {
      cancelled = true;
    };
  }, [selectedRegion]);

  // REGION DIRECTORY

  if (!region) {
    return (
      <main className="pokedex">
        <section className="pokedex__hero">
          <span className="pokedex__eyebrow">
            SHINYDEX 2.0 / REGION DIRECTORY
          </span>
          <h1>
            EXPLORE THE <span>POKÉDEX</span>
          </h1>
          <p>
            Nine regions. Nine generations. One evolving adventure. Choose your
            destination and discover the Pokémon that shaped each generation.
          </p>
          <div className="pokedex__hero-stats">
            <span>9 REGIONS</span>
            <span>9 GENERATIONS</span>
            <span>1025 POKÉMON</span>
          </div>
        </section>

        <section className="pokedex__directory">
          <div className="pokedex__section-heading">
            <div>
              <span>CHOOSE YOUR ADVENTURE</span>
              <h2>The Regions</h2>
            </div>
          </div>
          <div className="pokedex__region-grid">
            {regions.map((item) => (
              <RegionCard key={item.slug} region={item} />
            ))}
          </div>
        </section>
      </main>
    );
  }

  // INVALID REGION

  if (!selectedRegion) {
    return (
      <main className="pokedex pokedex__not-found">
        <h1>Region Not Found</h1>
        <p>Even Professor Oak hasn't discovered that region.</p>
        <Link to="/pokedex" className="pokedex__button">
          Return to Pokédex
        </Link>
      </main>
    );
  }

  // SELECTED REGION

  const pokemonCount = selectedRegion.endId - selectedRegion.startId + 1;

  return (
    <main className="pokedex">
      <section
        className={`pokedex__region-hero pokedex__region-hero--${selectedRegion.slug}`}
      >
        <Link to="/pokedex" className="pokedex__back">
          ← ALL REGIONS
        </Link>
        <div className="pokedex__region-heading">
          <span className="pokedex__eyebrow">
            GENERATION {selectedRegion.generation}
          </span>
          <h1>{selectedRegion.name}</h1>
          <h2>{selectedRegion.tagline}</h2>
          <p>{selectedRegion.description}</p>
        </div>
        <div className="pokedex__region-stats">
          <div>
            <strong>{pokemonCount}</strong>
            <span>POKÉMON</span>
          </div>

          <div>
            <strong>#{String(selectedRegion.startId).padStart(4, "0")}</strong>
            <span>FIRST ENTRY</span>
          </div>

          <div>
            <strong>#{String(selectedRegion.endId).padStart(4, "0")}</strong>
            <span>LAST ENTRY</span>
          </div>
        </div>
      </section>

      <section className="pokedex__pokemon-section">
        <div className="pokedex__section-heading">
          <div>
            <span>REGIONAL POKÉDEX</span>
            <h2>{selectedRegion.name} Collection</h2>
          </div>

          <p>
            {loading
              ? "Discovering Pokémon..."
              : error
                ? "Connection interrupted"
                : `${pokemon.length} Pokémon discovered`}
          </p>
        </div>

        {error ? (
          <div className="pokedex__error">
            <p>{error}</p>
            <button
              className="pokedex__button"
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          </div>
        ) : (
          <Grid>
            {loading || pokemon.length === 0
              ? Array.from({ length: 12 }, (_, index) => (
                  <PokemonSkeleton key={index} />
                ))
              : pokemon.map((item) => (
                  <PokemonCard
                    key={item.id}
                    pokemon={item}
                    onSelect={setSelectedPokemon}
                  />
                ))}
          </Grid>
        )}
      </section>
      {selectedPokemon && (
        <PokemonModal
          pokemon={selectedPokemon}
          onClose={() => setSelectedPokemon(null)}
        />
      )}
    </main>
  );
};

export default Pokedex;
