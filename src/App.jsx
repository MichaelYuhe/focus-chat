import React from 'react';
import { Toaster } from 'react-hot-toast';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './routes/HomePage/HomePage';
import ChatRoom from './routes/ChatRoom/ChatRoom';
import classNames from 'classnames';
import ui from './store/ui';

function App() {

  return (
    <div
      className={classNames(
        'w-full h-full flex items-center justify-center',
        ui.themeColor === 'brown' ? 'bg-primary-brown-bg' : ''
      )}>
      <Router>
        <Toaster/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/chat" element={<ChatRoom />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
