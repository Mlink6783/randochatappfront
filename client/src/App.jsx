// src/App.jsx
import { useState, useEffect } from 'react';
import socket from './socket';

function App() {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [socketConnected, setSocketConnected] = useState(false);

  const handleLogin = () => {
    if (name.trim() && photo.trim()) {
      localStorage.setItem('name', name);
      localStorage.setItem('photo', photo);
      setLoggedIn(true);
      socket.emit('join', { name, photo });
    }
  };

  // Socket connection check
  useEffect(() => {
    socket.on('connect', () => {
      console.log('Socket connected!');
      setSocketConnected(true);
    });

    socket.on('disconnect', () => {
      console.log('Socket disconnected!');
      setSocketConnected(false);
    });

    // Clean up socket events on unmount
    return () => {
      socket.off('connect');
      socket.off('disconnect');
    };
  }, []);

  if (!loggedIn) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <input
          className="border p-2 mb-2"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border p-2 mb-2"
          placeholder="Photo URL"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
        <button className="bg-blue-500 text-white p-2 rounded" onClick={handleLogin}>
          Enter Chat
        </button>
      </div>
    );
  }

  if (!socketConnected) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-red-100">
        <p>Connecting to server...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
      <h1 className="text-2xl font-bold mb-4">Welcome, {name}!</h1>
      <img src={photo} alt="Profile" className="w-24 h-24 rounded-full mb-4" />
      <p>Matched user and messages will come here!</p>
    </div>
  );
}

export default App;
