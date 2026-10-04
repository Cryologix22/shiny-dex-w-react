import { NavLink } from "react-router-dom";
import parkBall from "../assets/park-ball.png";
import "./Nav.css";
import RegionSelector from "./RegionSelector";
import { useState } from "react";

const Nav = () => {
  const [spinDirection, setSpinDirection] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <img className={`nav__logo ${spinDirection ? `spin--${spinDirection}` : ""}`} src={parkBall} alt="Park Ball" />
      <RegionSelector setSpinDirection={setSpinDirection} />
      <div className={`nav__links ${menuOpen ? "nav__links--open" : ""}`}>
        <NavLink to="/" end className="nav__link"
  onClick={() => setMenuOpen(false)}>
  Home
</NavLink>

<NavLink to="/pokedex" className="nav__link"
  onClick={() => setMenuOpen(false)}>
  Pokedex
</NavLink>

<NavLink to="/about" className="nav__link"
  onClick={() => setMenuOpen(false)}>
  About
</NavLink>
      </div>
<button
  className={`hamburger ${menuOpen ? "active" : ""}`}
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="Toggle navigation"
>
  <span></span>
  <span></span>
  <span></span>
</button>
    </nav>
  );
};

export default Nav;
