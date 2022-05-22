import React, { useEffect, useState } from 'react';
import { Icon } from '@mui/material';
import io from 'socket.io-client';
import rooms from '../../store/room';
import system from '../../store/system';
import Bubble from './Bubble';

export default function ChatRoom() {
  const ENDPOINT = 'http://localhost:5000';
  const socket = io(ENDPOINT);

  const [messages, setMessages] = useState([]);

  const currentRoom = rooms.currentRoom;

  const outputMessage = (message) => {
    setMessages(messages => [...messages, message]);
  };

  const name = system.name, room = system.room;

  useEffect(() => {
    setMessages([]);

    socket.emit('joinRoom', { name, room });

    // get room and users
    socket.on('roomUsers', ({ room, users }) => {
      console.log(room, users);
    });

    // get messages
    socket.on('message', (message) => {
      outputMessage(message);
    });
  }, []);

  return (
    <div className="w-full h-full p-6 flex flex-col items-center relative">
      {/* Header */}
      <div className="w-full border-b-2 flex justify-between items-center pb-2">
        <div
          className="flex items-center cursor-pointer p-1"
          onClick={() => {
            rooms.currentRoom = undefined;
            rooms.selectedRoom = undefined;
            system.room = undefined;
          }}
        >
          <Icon
            baseClassName="fas"
            className="fa-angle-left"
            fontSize="small"
          />
        </div>
        <div className="font-bold text-xl">{currentRoom.roomName}</div>
        <div className="flex items-center cursor-pointer p-1">
          <Icon baseClassName="fas" className="fa-bars" fontSize="small" />
        </div>
      </div>
      <div className="flex w-full flex-1">
        <div className="w-2/3 flex flex-col h-full mr-2">
          {/* Chat */}
          <div className="flex-1 w-full">
            {messages.map((message, index) => {
              return (
                <div key={index}>
                  <Bubble message={message} />
                </div>
              );
            })}
          </div>

          {/* Input */}
          <div className="absolute bottom-4 px-8 w-full h-10 flex items-center justify-start">
            <div className="w-1/2 h-full relative">
              <input
                type="text"
                className="w-full h-full rounded-full pl-6 bg-primary-brown-hover"
                placeholder="type here"
              />
              <div
                className="absolute flex items-center right-6 bottom-2
            cursor-pointer"
                onClick={() => {socket.emit('sendMessage', { name, room, message: 'test' });}}
              >
                <Icon
                  baseClassName="fas"
                  className="fa-paper-plane"
                  fontSize="small"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="flex-1 h-full border-2"></div>
      </div>
    </div>
  );
}
