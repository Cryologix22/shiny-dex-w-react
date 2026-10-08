import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import FeaturedPokemon from "../components/FeaturedPokemon";
import PokemonControls from "../components/PokemonControls";
import PokemonCard from "../components/PokemonCard";
import PokemonSkeleton from "../components/PokemonSkeleton";
import Grid from "../components/Grid";
import { fetchPokemonRange } from "../utils/fetchPokemon";
import "./Home.css";

const Home = () => {
  const [kantoPokemon, setKantoPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [retryCount, setRetryCount] = useState(0);
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("all");

  useEffect(() => {
    let cancelled = false;

    async function loadKantoPokemon() {
      setLoading(true);
      setError("");

      try {
        const allPokemon = await fetchPokemonRange(1, 151);
        if (!cancelled) setKantoPokemon(allPokemon);
      } catch (err) {
        console.error("Failed to load Kanto Pokémon:", err);
        if (!cancelled) {
          setKantoPokemon([]);
          setError("We couldn\'t load the Kanto Pokémon. Check your connection and try again.");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadKantoPokemon();
    return () => { cancelled = true; };
  }, [retryCount]);

  const filteredPokemon = kantoPokemon.filter((pokemon) => {
    const searchValue = search.toLowerCase().trim();

    const matchesSearch =
      pokemon.name.toLowerCase().includes(searchValue) ||
      pokemon.id.toString().includes(searchValue);

    const matchesType =
      selectedType === "all" ||
      pokemon.types.some((type) => type.type.name === selectedType);

    return matchesSearch && matchesType;
  });

  return (
    <main className="home">
      <Hero />
      {!loading && kantoPokemon.length > 0 && (
        <FeaturedPokemon pokemon={kantoPokemon} />
      )}
      <section id="kanto" className="home__kanto">
        <PokemonControls
          search={search}
          setSearch={setSearch}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          resultCount={filteredPokemon.length}
        />
        <div className="home__grid">
          <div className="home__grid-scroll">
            <Grid>
              {loading
                ? Array(12)
                    .fill(null)
                    .map((_, index) => <PokemonSkeleton key={index} />)
                : filteredPokemon.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                  ))}
            </Grid>
            {!loading && error && (
              <div className="home__empty" role="alert">
                <h3>Connection Interrupted</h3>
                <p>{error}</p>
                <button type="button" onClick={() => setRetryCount((count) => count + 1)}>
                  Try Again
                </button>
              </div>
            )}
            {!loading && !error && filteredPokemon.length === 0 && (
              <div className="home__empty">
                <h3>No Pokémon Found</h3>
                <p>
                  Even Professor Oak couldn't find that one. Try another search
                  or type.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="home__explore-regions">
        <p className="home__explore-eyebrow">The Journey Continues</p>
        <h2>Kanto Was Only the Beginning.</h2>
        <p>
          Nine generations. More than one thousand Pokémon. One evolving
          ShinyDex.
        </p>
        <Link to="/pokedex" className="home__explore-button">
          Explore All Regions →
        </Link>
      </section>
    </main>
  );
};

export default Home;
