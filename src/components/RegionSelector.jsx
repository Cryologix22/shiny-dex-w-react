import "./RegionSelector.css";
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import regions from "../data/regions";

const RegionSelector = ({ setSpinDirection }) => {
  
  const trackRef = useRef(null);
  const scrollInterval = useRef(null);

  const startScrolling = (direction) => {
    clearInterval(scrollInterval.current);
    setSpinDirection(direction);
    const amount = direction === "left" ? -30 : 30;

    scrollInterval.current = setInterval(() => {
      trackRef.current?.scrollBy({
        left: amount,
      });
    }, 50);
  };
  const stopScrolling = () => {
    clearInterval(scrollInterval.current);
    scrollInterval.current = null;
    setSpinDirection(null);
  };

  useEffect(() => {
    return () => {
      clearInterval(scrollInterval.current);
      setSpinDirection(null);
    };
  }, [setSpinDirection]);

  return (
    <div className="region__selector">
      <button
        className="region__arrow"
        onPointerDown={() => startScrolling("left")}
        onPointerUp={stopScrolling}
        onPointerLeave={stopScrolling}
        onPointerCancel={stopScrolling}
        onLostPointerCapture={stopScrolling}
      >
        ←
      </button>
      <div className="region__track" ref={trackRef}>
        {regions.map((region) => {
          return (
            <NavLink
              to={`/pokedex/${region.slug}`}
              key={region.slug}
              className="region__item"
            >
              {region.name}
            </NavLink>
          );
        })}
      </div>
      <button
        className="region__arrow"
        onPointerDown={() => startScrolling("right")}
        onPointerUp={stopScrolling}
        onPointerLeave={stopScrolling}
      >
        →
      </button>
    </div>
  );
};

export default RegionSelector;
