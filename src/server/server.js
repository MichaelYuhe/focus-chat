const http = require('http');
const express = require('express');
const socketio = require('socket.io');

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

const PORT = process.env.PORT || 5000;

// Setting up the server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Creating the server connection
io.on('connection', (socket) => {
    console.log('New client connected');
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});