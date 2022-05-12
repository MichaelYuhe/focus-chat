import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './routes/HomePage/HomePage';
import ChatRoom from './routes/ChatRoom/ChatRoom';

function App() {

  return (
    <Router>
      <Toaster/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/chat" element={<ChatRoom />} />
      </Routes>
    </Router>
  );
}

export default App;
