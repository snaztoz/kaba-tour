<script lang="ts">
	import Play from 'lucide-svelte/icons/play';
	import RotateCcw from 'lucide-svelte/icons/rotate-ccw';

	let { reset }: { reset: () => void } = $props();
</script>

<section class="absolute inset-x-0 bottom-0">
	<header class="flex justify-end gap-4 px-4 py-2 md:px-8">
		<button
			class="flex select-none items-center gap-2 rounded bg-neutral-600 px-4 py-2
        text-neutral-200 transition-colors hover:bg-neutral-700"
			onclick={() => reset()}
		>
			<RotateCcw />
			Reset
		</button>

		<button
			class="flex select-none items-center gap-2 rounded bg-red-700 px-4 py-2
        text-red-100 transition-colors hover:bg-red-800"
		>
			<Play />
			Run
		</button>
	</header>
</section>
