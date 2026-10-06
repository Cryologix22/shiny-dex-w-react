import "./PokemonSkeleton.css";

const PokemonSkeleton = () => {
  return (
    <div className="pokemon__skeleton">
      <div className="skeleton skeleton__id"></div>
      <div className="skeleton skeleton__name"></div>
      <div className="skeleton__stats">
        <div className="skeleton skeleton__stat"></div>
        <div className="skeleton skeleton__stat"></div>
      </div>
      <div className="skeleton skeleton__image"></div>
      <div className="skeleton__types">
        <div className="skeleton skeleton__type"></div>
        <div className="skeleton skeleton__type"></div>
      </div>
      <div className="skeleton skeleton__button"></div>
    </div>
  );
};

export default PokemonSkeleton;