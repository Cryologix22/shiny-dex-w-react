import { Link } from "react-router-dom";
import "./RegionCard.css";
import regionMaps from "../data/regionMaps";

const RegionCard = ({ region }) => {
  const pokemonCount = region.endId - region.startId + 1;

  return (
    <Link
      to={`/pokedex/${region.slug}`}
      className={`region-card region-card--${region.slug}`}
      style={{
    "--region-map": `url("${regionMaps[region.slug]}")`,
  }}
    >
      <div className="region-card__top">
        <span className="region-card__generation">
          GENERATION {region.generation}
        </span>
        <span className="region-card__number">
          #{String(region.generation).padStart(2, "0")}
        </span>
      </div>
      <div className="region-card__content">
        <span className="region-card__eyebrow">
          EXPLORE REGION
        </span>
        <h2>{region.name}</h2>
        <p>{region.tagline}</p>
      </div>
      <div className="region-card__bottom">
        <span>{pokemonCount} Pokémon</span>
        <span className="region-card__arrow">↗</span>
      </div>
    </Link>
  );
};

export default RegionCard;