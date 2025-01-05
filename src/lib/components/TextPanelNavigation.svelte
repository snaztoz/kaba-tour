<script lang="ts">
	import ChevronLeft from 'lucide-svelte/icons/chevron-left';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';

	let { prev, next }: { prev?: string; next?: string } = $props();
</script>

<nav class="flex">
	{#if prev}
		<a
			href={prev}
			class="flex select-none items-center gap-2 rounded border-2 border-emerald-500
        p-2 pr-4 text-emerald-600 transition-colors
				hover:bg-emerald-500 hover:text-emerald-50"
		>
			<ChevronLeft />
			Prev
		</a>
	{/if}

	{#if next}
		<a
			href={next}
			class="ml-auto flex select-none items-center gap-2 rounded border-2
				border-emerald-500 p-2 pl-4 text-emerald-600 transition-colors
				hover:bg-emerald-500 hover:text-emerald-50"
		>
			Next
			<ChevronRight />
		</a>
	{/if}
</nav>
