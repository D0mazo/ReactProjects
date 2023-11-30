import React, { useState } from 'react';
import './App.css'; // You can create a separate CSS file for styling

const Button = () => {
  const [number, setNumber] = useState(0);

  const handlePlus = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  const handleMinus = () => {
    setNumber((prevNumber) => prevNumber - 3);
  };

  return (
    <div className="app-container">
      <div className="number-display">{number}</div>
      <button onClick={handlePlus}>Plus</button>
      <button onClick={handleMinus}>Minus</button>
    </div>
  );
};

export default Button;