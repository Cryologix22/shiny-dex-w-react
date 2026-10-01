import "./App.css";
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import About from './pages/About'
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokedex" element={<Pokedex />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </>
  );
}

export default App;