import { proxy } from 'valtio';

const initState = { session: undefined, name: '' };

const system = proxy(initState);

export default system;

