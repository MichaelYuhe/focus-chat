import { proxy } from 'valtio';

const initState = {
    session: undefined,
    name: '',
    room: undefined
};

const system = proxy(initState);

export default system;

