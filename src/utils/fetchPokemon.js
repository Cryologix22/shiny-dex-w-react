export async function fetchPokemon(id) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch Pokémon #${id}: HTTP ${res.status}`);
  }

  const data = await res.json();
  return data;
}

export async function fetchPokemonRange(startId, endId) {
  const pokemonPromises = [];

  for (let i = startId; i <= endId; i++) {
    pokemonPromises.push(fetchPokemon(i));
  }

  const allPokemon = await Promise.all(pokemonPromises);

  return allPokemon;
}