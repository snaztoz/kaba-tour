<script lang="ts">
	import TourPage from '$lib/components/TourPage.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{data.title} | Tour de Kaba</title>
</svelte:head>

{#key data.slug}
	<TourPage content={data.content} code={data.code} prev={data.prev} next={data.next} />
{/key}
