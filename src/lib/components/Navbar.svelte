<script>
	import Menu from 'lucide-svelte/icons/menu';
	import { pages } from '$lib/constants/pages';

	let isNavOpened = $state(false);

	function open() {
		isNavOpened = true;
	}

	function close() {
		isNavOpened = false;
	}
</script>

<header
	class="flex items-center gap-4 border-b border-neutral-700 bg-red-700 px-2 py-1
			text-red-50 lg:px-6"
>
	<button class="rounded p-2 transition-colors hover:bg-red-600" onclick={open}>
		<Menu />
	</button>
	<h2 class="text-xl font-bold">Tour de Kaba</h2>

	{#if isNavOpened}
		<div
			role="presentation"
			class="fixed inset-x-0 inset-y-0 z-40 bg-neutral-900 opacity-50"
			onclick={close}
		></div>

		<div class="fixed inset-y-0 left-0 z-50 w-2/3 bg-neutral-800 p-8 md:w-1/2 lg:w-1/4">
			<h2 class="text-xl text-neutral-400">Table of Contents</h2>

			<nav class="mt-4 flex flex-col gap-4">
				{#each pages as page, i (page.slug)}
					<a href={page.slug} class="group flex items-center gap-2" onclick={close}>
						<span class="mr-1 text-neutral-500">{i}.</span>
						<span class="transition-colors group-hover:text-red-500">
							{page.title}
						</span>
					</a>
				{/each}
			</nav>
		</div>
	{/if}
</header>
