<script lang="ts">
	import TextPanel from '$lib/components/TextPanel.svelte';
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>Page Not Found | Tour de Kaba</title>
</svelte:head>

<main
	class="flex h-full w-full flex-col divide-y divide-neutral-700 md:flex-row
    md:divide-x md:divide-y-0"
>
	<div class="h-1/2 md:h-full md:w-1/2">
		<TextPanel content={page.error!.message} />
	</div>

	<div class="flex h-1/2 flex-col divide-y divide-neutral-700 md:h-full md:w-1/2">
		<section></section>
	</div>
</main>
