<script lang="ts">
	import CodePanel from './CodePanel.svelte';
	import ResultPanel from './ResultPanel.svelte';
	import TextPanel from './TextPanel.svelte';

	interface Props {
		content: string;
		code: string;
		prev: string;
		next?: string;
	}

	let { content, code: initialCode, prev, next }: Props = $props();

	let code = $state(initialCode);
</script>

<main
	class="flex min-h-0 grow flex-col divide-y divide-neutral-700 md:flex-row
    md:divide-x md:divide-y-0"
>
	<div class="h-1/2 md:h-full md:w-1/2">
		<TextPanel {content} {prev} {next} />
	</div>

	<div class="relative h-1/2 md:h-full md:w-1/2">
		<div class="flex h-full flex-col overflow-y-auto">
			<CodePanel {code} update={(s) => (code = s)} />
		</div>
		<ResultPanel reset={() => (code = initialCode)} />
	</div>
</main>
