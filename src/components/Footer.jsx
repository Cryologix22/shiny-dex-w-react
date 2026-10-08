import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <h2>
              SHINYDEX <span>2.0</span>
            </h2>
            <p>Every Generation. Every Pokémon. Every Shiny.</p>
            <span className="footer__tagline">
              Made with passion. Built to evolve. ✦
            </span>
          </div>

          <div className="footer__column">
            <h3>Explore</h3>
            <Link to="/">Home</Link>
            <Link to="/pokedex">Pokédex</Link>
            <Link to="/about">About</Link>
          </div>
          <div className="footer__column">
            <h3>Regions</h3>
            <Link to="/pokedex/kanto">Kanto</Link>
            <Link to="/pokedex/johto">Johto</Link>
            <Link to="/pokedex">All Regions</Link>
          </div>
          <div className="footer__column">
            <h3>Developer</h3>
            <a
              href="https://github.com/Cryologix22/shiny-dex-w-react"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://cryologix22.github.io/exclusive-e-portfolio/"
              target="_blank"
              rel="noreferrer"
            >
              Portfolio
            </a>
            <span>Built with React</span>
          </div>
        </div>
        <div className="footer__bottom">
          <p>
            Fan-made project powered by PokéAPI. Pokémon © Nintendo / Game Freak
            / Creatures / Bulbapedia.
          </p>
          <p>ShinyDex 2.0 • Keep Evolving ✦</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
