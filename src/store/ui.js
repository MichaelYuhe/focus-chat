import { proxy } from 'valtio';

const initState = { themeColor: 'brown', };

const ui = proxy(initState);

export default ui;

