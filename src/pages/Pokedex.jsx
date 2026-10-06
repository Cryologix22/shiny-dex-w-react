import { useParams, Link } from "react-router-dom";
import regions from "../data/regions";
import { useEffect, useState } from "react";
import { fetchPokemonRange } from "../utils/fetchPokemon";
import PokemonCard from "../components/PokemonCard";
import Grid from "../components/Grid";
import PokemonSkeleton from "../components/PokemonSkeleton";

const Pokedex = () => {
const [pokemon, setPokemon] = useState([]);
const [loading, setLoading] = useState(false);
const { region } = useParams();
const selectedRegion = regions.find(
 (item) => item.slug === region
);

 useEffect(() => {
  if (!selectedRegion) return;

  async function loadRegionPokemon() {
    setLoading(true);

    const allPokemon = await fetchPokemonRange(
      selectedRegion.startId,
      selectedRegion.endId
    );

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setPokemon(allPokemon);
    console.log("Loading:", loading);

     setLoading(false);
  }

  loadRegionPokemon();
}, [selectedRegion]);

  if (!region) {
    return (
      <section className="pokedex">
        <h1>Choose Your Region</h1>
        {regions.map((region) => {
                  return (
                    <Link
                      to={`/pokedex/${region.slug}`}
                      key={region.slug}
                      className="region__item"
                    >
                      {region.name}
                    </Link>
                  );
                })}
      </section>
    );
  }
  return (
    <>
    <section className="pokedex">
      <h1>{selectedRegion?.name}</h1>
<h2>Generation {selectedRegion?.generation}</h2>
<h4>First 'Mon {selectedRegion?.startId}</h4>
<h4>Last 'Mon' {selectedRegion?.endId}</h4>
<h4>Tagline: {selectedRegion?.tagline}</h4>
<p>Description: {selectedRegion?.description}</p>
    </section>
    <Grid>
  {loading
    ? Array(12)
        .fill(null)
        .map((_, index) => (
          <PokemonSkeleton key={index} />
        ))
    : pokemon.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
        />
      ))}
</Grid>
    </>
  );
};

export default Pokedex