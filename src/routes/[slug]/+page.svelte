<script lang="ts">
	import CodePanel from '$lib/components/CodePanel.svelte';
	import ResultPanel from '$lib/components/ResultPanel.svelte';
	import TextPanel from '$lib/components/TextPanel.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let { title, content, code, prev, next } = $derived(data);
</script>

<svelte:head>
	<title>{title} | Tour de Kaba</title>
</svelte:head>

<main
	class="flex min-h-0 grow flex-col divide-y divide-neutral-700 md:flex-row
    md:divide-x md:divide-y-0"
>
	<div class="h-1/2 md:h-full md:w-1/2">
		<TextPanel {content} {prev} {next} />
	</div>

	<div class="relative h-1/2 md:h-full md:w-1/2">
		<div class="flex h-full flex-col overflow-y-auto">
			<CodePanel initialCode={code} />
		</div>
		<ResultPanel />
	</div>
</main>
