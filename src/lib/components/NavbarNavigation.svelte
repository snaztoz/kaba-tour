<script lang="ts">
	import { pages } from '$lib/constants/pages';
	import { slide } from 'svelte/transition';

	let { close }: { close: () => void } = $props();
</script>

<div
	role="presentation"
	class="fixed inset-x-0 inset-y-0 z-40 bg-neutral-900 opacity-50"
	onclick={close}
></div>

<div
	transition:slide={{ axis: 'x' }}
	class="overflow-x-hide fixed inset-y-0 left-0 z-50 w-2/3 overflow-y-auto bg-neutral-800 p-8 text-neutral-300
    md:w-1/2 lg:w-1/4"
>
	<h2 class="text-nowrap text-xl text-neutral-400">Table of Contents</h2>

	<nav class="mt-6 flex flex-col gap-4">
		{#each pages as page, i (page.slug)}
			<a href={page.slug} class="group flex items-center gap-2 text-nowrap" onclick={close}>
				<span class="mr-1 w-4 text-neutral-500">{i}.</span>
				<span class="transition-colors group-hover:text-red-500">
					{page.title}
				</span>
			</a>
		{/each}
	</nav>
</div>
