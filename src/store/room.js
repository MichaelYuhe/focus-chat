import { proxy } from 'valtio';

const roomModel = {
    roomName: '',
    configs: {
        clockTime: 30,
        interval: 10
    }
};

const initState = {
    rooms: [],
    selectedRoom: ''
};

const rooms = proxy(initState);

export default rooms;
