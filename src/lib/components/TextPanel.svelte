<script lang="ts">
	import TextPanelNavigation from './TextPanelNavigation.svelte';

	interface Props {
		content: string;
		prev?: string;
		next?: string;
	}

	let { content, prev, next }: Props = $props();
</script>

<section class="flex h-full flex-col">
	<div class="!w-full grow overflow-y-auto p-4 lg:p-8">
		<div
			class="prose prose-neutral prose-invert prose-h1:text-2xl prose-h1:font-bold
			prose-h1:text-neutral-100 prose-a:transition-colors hover:prose-a:text-red-500
			prose-pre:border prose-pre:border-neutral-700 prose-pre:bg-neutral-900
			prose-pre:text-neutral-400"
		>
			{@html content}
		</div>
	</div>

	<TextPanelNavigation {prev} {next} />
</section>
