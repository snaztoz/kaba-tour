<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="flex h-screen w-screen flex-col bg-neutral-800">
	<Navbar />

	{@render children()}
</div>
