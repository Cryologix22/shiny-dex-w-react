const speciesCache = new Map();

export async function fetchPokemonDescription(id) {
  if (speciesCache.has(id)) {
    return speciesCache.get(id);
  }

  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`
  );

  if (!response.ok) {
    throw new Error(`Species request failed: ${response.status}`);
  }

  const data = await response.json();

  const englishEntries = data.flavor_text_entries.filter(
    (entry) => entry.language.name === "en"
  );

  const entry = englishEntries[0];

  const description = entry
    ? entry.flavor_text.replace(/[\n\f\r]+/g, " ").replace(/\s+/g, " ").trim()
    : "No Pokédex description available.";

  speciesCache.set(id, description);

  return description;
}