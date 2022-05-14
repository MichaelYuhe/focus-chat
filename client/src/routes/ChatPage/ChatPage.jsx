import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import SideBar from '../../components/SideBar/SideBar';
import ChatRoom from '../../components/ChatRoom/ChatRoom';
import RoomPreview from '../../components/ChatRoom/RoomPreview';
import ui from '../../store/ui';
import './index.css';
import rooms from '../../store/room';
import { useSnapshot } from 'valtio';

export default function ChatPage() {
    const ENDPOINT = 'http://localhost:5000';

    const socket = io(ENDPOINT);

    const roomsSnap = useSnapshot(rooms);

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
            // ui.colorIndex === 0 ? 'bg-primary-brown-main' : ''
            `bg-primary-${ui.themeColor[0]}-main`
        )}>
          <SideBar />
          {roomsSnap.currentRoom ?
            <ChatRoom /> :
            <RoomPreview/>
          }
        </div>
      </div>
    );
}
