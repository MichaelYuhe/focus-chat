import { proxy } from 'valtio';

const roomModel = {
    roomName: '',
    configs: {
        clockTime: 30,
        interval: 10
    }
};

const initState = {
    rooms: [
        {
            roomName: 'JavaScript',
            activePeople: 50,
            configs: {
                clockTime: 50,
                messageInterval: 10
            }
        },
        {
            roomName: 'Pokemon',
            activePeople: 1720,
            configs: {
                clockTime: 50,
                messageInterval: 10
            }
        },
        {
            roomName: 'ZJU',
            activePeople: 990,
            configs: {
                clockTime: 50,
                messageInterval: 10
            }
        },
        {
            roomName: 'Suns Fan',
            activePeople: 350,
            configs: {
                clockTime: 50,
                messageInterval: 10
            }
        }
    ],
    selectedRoom: ''
};

const rooms = proxy(initState);

export default rooms;

