import * as sapper from '@sapper/app';

import websocketStore from 'svelte-websocket-store';

export const myStore = websocketStore("wss://mydomain.com/ws1", {});

sapper.start({
	target: document.querySelector('#sapper')
});