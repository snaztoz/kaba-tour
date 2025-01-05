<script lang="ts">
	import TextPanel from '$lib/components/TextPanel.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let { content, next } = $derived(data);
</script>

<main
	class="flex h-full w-full flex-col divide-y divide-slate-700 md:flex-row
    md:divide-x md:divide-y-0"
>
	<div class="h-1/2 md:h-full md:w-1/2">
		<TextPanel {content} {next} />
	</div>

	<div class="flex h-1/2 flex-col divide-y divide-slate-700 md:h-full md:w-1/2">
		<section></section>
	</div>
</main>
