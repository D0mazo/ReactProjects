import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Number from './Number';
import Mygtukas from './Mygtukas';
import Square from './Square';
import Final from './Final';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <App />
      <Number />
      <Mygtukas />
      <Square />
      <Final />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);