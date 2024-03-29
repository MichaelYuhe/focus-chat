import React from 'react';
import { Toaster } from 'react-hot-toast';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './routes/HomePage/HomePage';
import ChatPage from './routes/ChatPage/ChatPage';
import classNames from 'classnames';
import ui from './store/ui';

function App() {

  return (
    <div
      className={classNames(
        'w-full h-full flex items-center justify-center',
        ui.colorIndex === 0 ? 'bg-primary-brown-bg' : ''
      )}>
      <Router>
        <Toaster/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
