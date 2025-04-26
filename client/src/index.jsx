// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Tailwind or any global styles
import App from './App'; // Import the main app component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
