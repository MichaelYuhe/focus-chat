import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import SideBar from '../../components/Chat/SideBar/SideBar';
import ChatRoom from '../../components/Chat/ChatRoom/ChatRoom';
import ui from '../../store/ui';
import './index.css';

export default function ChatPage() {
    const ENDPOINT = 'http://localhost:5000';

    const socket = io(ENDPOINT);

    useEffect(() => {
      // // user enters chat sqaure
      // socket.emit('joinRoom', { name, room });

      // // get room and users
      // socket.on('roomUsers', ({ room, users }) => {

      // });

      // // get messages
      // socket.on('message', (message) => {

      // });
    }, [ENDPOINT]);

    return (
      <div className="w-full h-full px-20 py-16">
        <div
          className={classNames(
            'w-full h-full rounded-3xl flex',
            ui.themeColor === 'brown' ? 'bg-primary-brown-main' : ''
        )}>
          <SideBar />
          <ChatRoom />
        </div>
      </div>
    );
}
