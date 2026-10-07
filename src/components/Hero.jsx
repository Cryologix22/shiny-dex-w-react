import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__glow"></div>
        <div className="hero__content">
          <p className="hero__eyebrow">The Pokédex Has Evolved</p>
         <h1 className="hero__title">
          SHINYDEX <span>2.0</span>
          </h1>
          <h2 className="hero__headline">
          Every Generation. Every Pokémon.
          <span> Every Shiny.</span>
          </h2>
         <p className="hero__description">
          Explore the world of Pokémon through an evolving Pokédex powered by
          React and live Pokémon data.
         </p>
           <div className="hero__actions">
             <Link to="/pokedex" className="hero__button hero__button--primary">
            Explore Pokédex
              </Link>
             <Link to="/about" className="hero__button">
               About ShinyDex
             </Link>
            </div>
         <a href="#kanto" className="hero__explore">
          <span>Explore</span>
          <span className="hero__arrow">↓</span>
         </a>
        </div>
    </section>
  );
};

export default Hero;