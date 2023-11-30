import React, { useState } from 'react';
import './Square.css'; 

const Square = () => {
  const [squares, setSquares] = useState([]);

  const handleAdd = () => {
    setSquares((prevSquares) => [...prevSquares, { id: prevSquares.length + 1 }]);
  };

  return (
    <div className="app-container">
      <button onClick={handleAdd}>Add</button>
      <div className="squares-container">
        {squares.map((square) => (
          <div key={square.id} className="blue-square"></div>
        ))}
      </div>
    </div>
  );
};

export default Square;