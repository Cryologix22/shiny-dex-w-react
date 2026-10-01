import "./App.css";
import Home from './pages/Home'
import Nav from "./components/Nav";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
    <Nav />
    <div className="coming-soon">
      <h1>
        <span className="shiny">Shiny</span>{" "}
        <span className="dex">Dex</span>
      </h1>

      <p>Coming soon...</p>
    <Home />
    </div>
    </Router>
  );
}

export default App;