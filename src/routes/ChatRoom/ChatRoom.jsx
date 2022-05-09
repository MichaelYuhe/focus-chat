import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './index.css';

export default function ChatRoom() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    const [messages, setMessages] = useState([])

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
      <div>
        <h1>ChatRoom</h1>
      </div>
    );
}