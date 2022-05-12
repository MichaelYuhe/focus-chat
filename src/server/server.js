const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const formatMessage = require('../utils/message');
const {
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers
} = require('./user');

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
    cors: {
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
        credentials: true
    }
});

// Creating the server connection
io.on('connection', (socket) => {
    console.log('New client connected');

    // User join the room
    socket.on('join', ({ name, room }, callback) => {
        const { error, user } = userJoin({ id: socket.id, name, room });

        if (error) {
            return callback(error);
        }
        socket.join(user.room);
        callback(null);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

const PORT = process.env.PORT || 5000;

// Setting up the server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
