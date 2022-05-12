import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import SideBar from '../../components/Chat/SideBar/SideBar';
import './index.css';

export default function ChatRoom() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    const [messages, setMessages] = useState([]);

    const ENDPOINT = 'http://localhost:5000';

    useEffect(() => {

        const socket = io(ENDPOINT);

        // socket.emit("join", { name, room }, (error) => {
        //     if (error) {
        //         alert(error)
        //     }
        // });
    }, [ENDPOINT]);

    return (
      <div className="w-full h-full p-20">
        <div className="w-full h-full bg-primary-light rounded-3xl">
          <SideBar/>
        </div>
      </div>
    );
}
