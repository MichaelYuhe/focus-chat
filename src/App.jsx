import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './routes/HomePage/HomePage';
import ChatRoom from './routes/ChatRoom/ChatRoom';
import Profile from './routes/Profile/Profile';
import Sign from './routes/Sign/Sign';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/chat" element={<ChatRoom />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/sign" element={<Sign/>} />
      </Routes>
    </Router>
  );
}

export default App;
