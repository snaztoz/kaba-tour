<script lang="ts">
	import ChevronLeft from 'lucide-svelte/icons/chevron-left';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';

	let { prev, next }: { prev?: string; next?: string } = $props();
</script>

{#if prev || next}
	<footer class="border-t border-neutral-700 px-4 py-2 lg:px-8">
		<nav class="flex">
			{#if prev}
				<a
					href={prev}
					class="flex select-none items-center gap-2 rounded p-2
						pr-4 text-white transition-colors hover:text-red-500"
				>
					<ChevronLeft size={20} />
					Prev
				</a>
			{/if}

			{#if next}
				<a
					href={next}
					class="ml-auto flex select-none items-center gap-2 rounded p-2 pl-4
						text-white transition-colors hover:text-red-500"
				>
					Next
					<ChevronRight />
				</a>
			{/if}
		</nav>
	</footer>
{/if}
