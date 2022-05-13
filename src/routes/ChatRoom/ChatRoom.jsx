import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import SideBar from '../../components/Chat/SideBar/SideBar';
import ui from '../../store/ui';
import './index.css';

export default function ChatRoom() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    const [messages, setMessages] = useState([]);

    const ENDPOINT = 'http://localhost:5000';

    useEffect(() => {
      const socket = io(ENDPOINT);

        // user enters chat sqaure
        // socket.emit("join", { name, room }, (error) => {
        //     if (error) {
        //         alert(error)
        //     }
        // });
    }, [ENDPOINT]);

    return (
      <div className="w-full h-full px-20 py-16">
        <div
          className={classNames(
            'w-full h-full rounded-3xl',
            ui.themeColor === 'brown' ? 'bg-primary-brown-main' : ''
        )}>
          <SideBar/>
        </div>
      </div>
    );
}
