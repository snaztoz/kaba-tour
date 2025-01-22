<script>
	import Menu from 'lucide-svelte/icons/menu';
	import NavbarNavigation from './NavbarNavigation.svelte';

	let isNavOpened = $state(false);

	function open() {
		isNavOpened = true;
	}

	function close() {
		isNavOpened = false;
	}
</script>

<header
	class="flex items-center gap-4 border-b border-neutral-700 bg-neutral-800 px-2 py-1
			text-neutral-400 lg:px-6"
>
	<button class="rounded p-2 transition-colors hover:bg-neutral-700" onclick={open}>
		<Menu />
	</button>
	<h2 class="text-xl font-bold">Tour de Kaba</h2>

	{#if isNavOpened}
		<NavbarNavigation {close} />
	{/if}
</header>
