import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './routes/HomePage';
import ChatRoom from './routes/ChatRoom';
import Profile from './routes/Profile';

function App() {
  return (
    <Router>
      <Route path="/" element={<HomePage/>} />
      <Route path="/chat" element={<ChatRoom/>} />
      <Route path="/profile" element={<Profile/>} />
    </Router>
  );
}

export default App;
