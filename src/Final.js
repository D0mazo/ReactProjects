import React, { useState } from 'react';
import './Final.css'; 
const Final = () => {
  const [squares, setSquares] = useState([]);

  const handleAddRed = () => {
    setSquares((prevSquares) => [...prevSquares, { id: prevSquares.length + 1, color: 'red' }]);
  };

  const handleAddBlue = () => {
    setSquares((prevSquares) => [...prevSquares, { id: prevSquares.length + 1, color: 'blue' }]);
  };

  const handleReset = () => {
    setSquares([]);
  };

  return (
    <div className="app-container">
      <button onClick={handleAddRed}>Add Red</button>
      <button onClick={handleAddBlue}>Add Blue</button>
      <button onClick={handleReset}>Reset</button>
      <div className="squares-container">
        {squares.map((square) => (
          <div key={square.id} className="colored-square" style={{ backgroundColor: square.color }}></div>
        ))}
      </div>
    </div>
  );
};

export default Final;