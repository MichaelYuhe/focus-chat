import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './index.css';

interface Props {
}

export default function ChatRoom() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const ENDPOINT = 'http://localhost:5000';

    useEffect(() => {
        const socket = io(ENDPOINT);
    }, [ENDPOINT]);

    return (
        <div>
            <h1>ChatRoom</h1>
        </div>
    );
}