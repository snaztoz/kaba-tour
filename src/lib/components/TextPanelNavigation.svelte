<script lang="ts">
	import ChevronLeft from 'lucide-svelte/icons/chevron-left';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';

	let { prev, next }: { prev?: string; next?: string } = $props();
</script>

<nav class="flex">
	{#if prev}
		<a
			href={prev}
			class="flex select-none items-center gap-2 rounded border-2 border-red-600
        p-2 pr-4 text-red-600 transition-colors hover:bg-red-600 hover:text-red-100"
		>
			<ChevronLeft />
			Prev
		</a>
	{/if}

	{#if next}
		<a
			href={next}
			class="ml-auto flex select-none items-center gap-2 rounded border-2
				border-red-600 p-2 pl-4 text-red-600 transition-colors hover:bg-red-600
				hover:text-red-100"
		>
			Next
			<ChevronRight />
		</a>
	{/if}
</nav>
