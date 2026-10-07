import "./PokemonControls.css";

const types = [
  "all",
  "normal",
  "fire",
  "water",
  "electric",
  "grass",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dragon",
  "dark",
  "steel",
  "fairy",
];

const PokemonControls = ({
  search,
  setSearch,
  selectedType,
  setSelectedType,
  resultCount,
}) => {
  return (
    <section className="pokemon-controls">
      <div className="pokemon-controls__heading">
        <p>Generation I</p>
        <h2>The Original 151</h2>
        <span>
          Where it all began. Explore the Pokémon of the Kanto region.
        </span>
      </div>
      <div className="pokemon-controls__search">
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search by Pokémon name or Pokédex number..."
        />
      </div>
      <div className="pokemon-controls__types">
        {types.map((type) => (
          <button
            key={type}
            className={`pokemon-controls__type ${
              selectedType === type ? "active" : ""
            }`}
            onClick={() => setSelectedType(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <p className="pokemon-controls__count">
        Showing <strong>{resultCount}</strong> Pokémon
      </p>
    </section>
  );
};

export default PokemonControls;