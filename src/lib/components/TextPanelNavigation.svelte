<script lang="ts">
	import ChevronLeft from 'lucide-svelte/icons/chevron-left';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';

	let { prev, next }: { prev?: string; next?: string } = $props();
</script>

<nav class="flex">
	{#if prev}
		<a
			href={prev}
			class="flex items-center gap-2 rounded border border-slate-700 p-2
        pr-4 hover:bg-slate-700"
		>
			<ChevronLeft />
			Prev
		</a>
	{/if}

	{#if next}
		<a
			href={next}
			class="ml-auto flex items-center gap-2 rounded border border-slate-700 p-2
        pl-4 hover:bg-slate-700"
		>
			Next
			<ChevronRight />
		</a>
	{/if}
</nav>
