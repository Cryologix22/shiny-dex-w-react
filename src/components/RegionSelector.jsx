import React from "react";
import "./RegionSelector.css";
import { useRef } from "react";

const RegionSelector = ({ setSpinDirection }) => {
  const regions = [
    { name: "Kanto", slug: "kanto", generation: 1 },
    { name: "Johto", slug: "johto", generation: 2 },
    { name: "Hoenn", slug: "hoenn", generation: 3 },
    { name: "Sinnoh", slug: "sinnoh", generation: 4 },
    { name: "Unova", slug: "unova", generation: 5 },
    { name: "Kalos", slug: "kalos", generation: 6 },
    { name: "Alola", slug: "alola", generation: 7 },
    { name: "Galar", slug: "galar", generation: 8 },
    { name: "Paldea", slug: "paldea", generation: 9 },
  ];
  const trackRef = useRef(null);
  const scrollInterval = useRef(null);

  const startScrolling = (direction) => {
    setSpinDirection(direction);
  const amount = direction === "left" ? -30 : 30;

  scrollInterval.current = setInterval(() => {
    trackRef.current.scrollBy({
      left: amount,
    });
  }, 50);
};
const stopScrolling = () => {
  clearInterval(scrollInterval.current);
  scrollInterval.current = null;
  setSpinDirection(null);
};

  return (
    <div className="region__selector">
      <button
  className="region__arrow"
  onPointerDown={() => startScrolling("left")}
  onPointerUp={stopScrolling}
  onPointerLeave={stopScrolling}
>
  ←
</button>
      <div className="region__track" ref={trackRef}>
        {regions.map((region) => {
          return (
            <button key={region.slug} className="region__item">
              {region.name}
            </button>
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
