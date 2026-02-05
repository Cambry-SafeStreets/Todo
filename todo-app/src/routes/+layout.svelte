<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<main class="flex flex-col bg-gray-400">
	<div name="header" class="text-7xl font-mono">
		<h1 class="">Banner will kinda go here</h1>
	</div>

	<div>
	{@render children()}
	</div>

	<div name="footer" class="fixed bottom-2 left-2 right-0 flex" >
		<img class="max-h-8" src="https://www.safestreets.com/wp-content/uploads/2025/09/Safestreets-Google-Logo.png" alt="SafeStreets Logo">
		<h1 class="text-2xl font-mono text-gray-400 ml-4">Cambry Practice</h1>
	</div>
</main>