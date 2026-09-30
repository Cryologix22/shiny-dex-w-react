import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'

function App() {
  return (
    <div className="coming-soon">
      <h1>
        <span className="shiny">Shiny</span>{" "}
        <span className="dex">Dex</span>
      </h1>

      <p>Coming soon...</p>
      <Home />
    </div>
  );
}

export default App;