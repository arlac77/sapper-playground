<script>
	console.log("ABOUT");

	import websocketStore from 'svelte-websocket-store';

export const myStore = websocketStore("wss://mydomain.com/ws1", {});

console.log(myStore);

</script>
<svelte:head>
	<title>About</title>
</svelte:head>

<h1>About this site</h1>

<p>This is the 'about' page. There's not much here.</p>