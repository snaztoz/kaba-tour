<script lang="ts">
	import CodePanel from '$lib/components/CodePanel.svelte';
	import ResultPanel from '$lib/components/ResultPanel.svelte';
	import TextPanel from '$lib/components/TextPanel.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let { content, prev, next } = $derived(data);
</script>

<main
	class="flex min-h-0 grow flex-col divide-y divide-neutral-700 md:flex-row
    md:divide-x md:divide-y-0"
>
	<div class="h-1/2 md:h-full md:w-1/2">
		<TextPanel {content} {prev} {next} />
	</div>

	<div class="relative flex h-1/2 flex-col md:h-full md:w-1/2">
		<CodePanel />
		<ResultPanel />
	</div>
</main>
