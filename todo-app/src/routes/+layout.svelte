<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/stores'

	let { children } = $props();

	const { title } = $derived($page.data.meta)
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="flex flex-col h-screen max-h-screen bg-slate-800">
	<!-- bg-[url('https://i.pinimg.com/736x/b4/09/ee/b409ee94ef48f517884709bc4f12eb93.jpg')] -->
	<div class="text-6xl font-mono 
		bg-slate-900
		h-48 bg-no-repeat bg-cover
		flex justify-center items-center" >
		<h1 class="text-white ">{title}</h1>
	</div>

	<div class="flex justify-center items-center mt-5">
	{@render children()}
	</div>

	<div class="fixed bottom-2 left-2 right-0 flex" >
		<img class="max-h-8 " src="https://www.safestreets.com/wp-content/uploads/2025/09/Safestreets-Google-Logo.png" alt="SafeStreets Logo">
		<h1 class="text-2xl font-mono text-gray-600 ml-4">Cambry Practice</h1>
	</div>
</div>