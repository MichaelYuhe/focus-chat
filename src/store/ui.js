import { proxy } from 'valtio';

const initState = {
    themeColor: [
        'brown',
        'night',
        'blue',
        'cyberpunk'
    ],
    colorIndex: 0
};

const ui = proxy(initState);

export default ui;

