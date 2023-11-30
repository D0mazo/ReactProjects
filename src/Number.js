import React, { useState } from 'react';
import './Number.css'; 

const Number = () => {
  const [isCircle, setIsCircle] = useState(true);
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());

  function generateRandomNumber() {
    return Math.floor(Math.random() * (25 - 5 + 1)) + 5;
  }

  const toggleShape = () => {
    setIsCircle((prevIsCircle) => !prevIsCircle);
  };

  const changeRandomNumber = () => {
    setRandomNumber(generateRandomNumber());
  };

  return (
    <div className="app-container">
      <div className={isCircle ? 'shape circle' : 'shape rectangle'}>
        {randomNumber}
      </div>
      <button onClick={toggleShape}>Change Shape</button>
      <button onClick={changeRandomNumber}>Random Number</button>
    </div>
  );
};

export default Number;