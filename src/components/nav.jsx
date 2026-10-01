import { Link } from "react-router-dom";
import parkBall from "../assets/park-ball.png";
import "./Nav.css";
import RegionSelector from "./RegionSelector";
import { useState } from "react";

const Nav = () => {
  const [spinDirection, setSpinDirection] = useState(null);

  return (
    <nav className="nav">
      <img className={`nav__logo ${spinDirection ? `spin--${spinDirection}` : ""}`} src={parkBall} alt="Park Ball" />
      <RegionSelector setSpinDirection={setSpinDirection} />
      <div className="nav__links">
        <Link to="/" className="nav__link">
          Home
        </Link>
        <Link to="/pokedex" className="nav__link">
          Pokedex
        </Link>
        <Link to="/about" className="nav__link">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
