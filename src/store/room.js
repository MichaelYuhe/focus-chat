import { proxy } from 'valtio';

const roomModel = {
    roomName: '',
    activePeople: 0,
    intro: '',
    rules: {
        clockTime: 30,
        interval: 10,
        maxPeople: 50
    }
};

const initState = {
    rooms: [
        {
            roomName: 'JavaScript',
            activePeople: 50,
            intro: 'The best language all over the world. Agree with that and join us.',
            rules: {
                clockTime: 50,
                messageInterval: 10,
                maxPeople: 5000
            }
        },
        {
            roomName: 'Pokemon',
            activePeople: 1720,
            intro: '',
            rules: {
                clockTime: 50,
                messageInterval: 10,
                maxPeople: 50
            }
        },
        {
            roomName: 'ZJU',
            activePeople: 990,
            intro: '',
            rules: {
                clockTime: 50,
                messageInterval: 10,
                maxPeople: 50
            }
        },
        {
            roomName: 'Suns Fan',
            activePeople: 350,
            intro: '',
            rules: {
                clockTime: 50,
                messageInterval: 10,
                maxPeople: 50
            }
        }
    ],
    selectedRoom: undefined,
    currentRoom: undefined,
};

const rooms = proxy(initState);

export default rooms;

