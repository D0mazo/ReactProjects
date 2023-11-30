import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [isCircle, setIsCircle] = useState(true);

  const toggleShape = () => {
    setIsCircle((prevIsCircle) => !prevIsCircle);
  };

  return (
    <div className="app-container">
      <div className={isCircle ? 'shape circle' : 'shape square'}></div>
      <button onClick={toggleShape}>Pakeisti</button>
    </div>
  );


};

export default App;
