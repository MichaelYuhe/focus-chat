import { proxy } from 'valtio';

const initState = {
    themeColor: [
        'brown',
        'night',
        'blue',
        'cyberpunk'
    ],
    fontColor: [],
    colorIndex: 0
};

const ui = proxy(initState);

export default ui;

