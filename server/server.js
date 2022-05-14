const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const { formatMessage } = require('../client/src/utils/message');
const {
    userJoin,
    userEnter,
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

const botName = 'Room King';

// Creating the server connection
io.on('connection', (socket) => {
    // User join the room
    socket.on('joinRoom', ({ name, room }) => {
        const user = userJoin(socket.id, name, room);

        socket.join(user.room);

        socket.emit('message', formatMessage(botName, `Welcome to ${user.room.roomName}!`));

        socket.broadcast
            .to(user.room)
            .emit(
                'message',
                formatMessage(botName, `${user.name} Has Joined the Room!`)
            );

        io.to(user.room).emit('roomUsers', {
            room: user.room,
            users: getRoomUsers(user.room)
        });
    });

    socket.on('message', msg => {
        const user = getCurrentUser(socket.id);

        io.to(user.room).emit(
            'message',
            formatMessage(user.name, msg)
        );
    });

    // User enter the sqaure
    // socket.on('enter', ({ name }, callback) => {
    //     const { error, user } = userEnter(socket.id, name);
    //     if (error) {
    //         return callback(error);
    //     }
    //     socket.emit('message', formatMessage(botName, 'Welcome to Focus Chat!'));
    //     // socket.broadcast
    //     //     .to(user.room)
    //     //     .emit(
    //     //         'message',
    //     //         formatMessage(botName, `${user.name} Has Joined the Room!`)
    //     //     );
    //     callback(null);
    // });


    // client disconnect
    socket.on('lerveRoom', () => {
        const user = userLeave(socket.id);

        if (user) {
            io.to(user.room).emit(
                'message',
                formatMessage(botName, `${user.name} Has Left...`)
            );

            io.to(user.room).emit('roomUsers', {
                room: user.room,
                users: getRoomUsers(user.room)
            });
        }
    });
});

const PORT = process.env.PORT || 5000;

// Setting up the server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
