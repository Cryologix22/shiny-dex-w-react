import { Link } from "react-router-dom";
import parkBall from '../assets/park-ball.png'

const Nav = () => {
  return (
    <nav>
      <img src={parkBall} alt="Park Ball" />
      <Link to="/">Home</Link>
      <Link to="/pokedex">Pokedex</Link>
      <Link to="/about">About</Link>
    </nav>
  )
}

export default Nav