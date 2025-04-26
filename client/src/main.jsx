
import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

const App = () => {
  return <div className="p-4 text-center text-xl">Welcome to Rando Chat!</div>;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
    