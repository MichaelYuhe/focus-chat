import { proxy } from 'valtio';

const initState = { session: undefined, };

const system = proxy(initState);

export default system;

