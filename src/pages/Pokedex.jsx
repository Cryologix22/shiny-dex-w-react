import { useParams, Link } from "react-router-dom";
import regions from "../data/regions";
import { useEffect, useState } from "react";
import { fetchPokemonRange } from "../utils/fetchPokemon";
import PokemonCard from "../components/PokemonCard";
import Grid from "../components/Grid";

const Pokedex = () => {
const [pokemon, setPokemon] = useState([]);

console.log(pokemon);
const { region } = useParams();
const selectedRegion = regions.find(
 (item) => item.slug === region
);

 useEffect(() => {
  if (!selectedRegion) return;

  async function loadRegionPokemon() {
    const allPokemon = await fetchPokemonRange(
      selectedRegion.startId,
      selectedRegion.endId
    );

    setPokemon(allPokemon);
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
      {pokemon.map((pokemon) => {
        return (
          <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          />
        );
      })}
      </Grid>
    </>
  );
};

export default Pokedex