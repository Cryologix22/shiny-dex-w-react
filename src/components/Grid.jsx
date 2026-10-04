import React from 'react'
import './Grid.css'

const Grid = ({ children }) => {
  return (
    <div className="pokemon__grid">
      {children}
    </div>
  );
};

export default Grid;