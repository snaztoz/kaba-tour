<script lang="ts">
	import Menu from 'lucide-svelte/icons/menu';
	import TextPanelNavigation from './TextPanelNavigation.svelte';

	interface Props {
		content: string;
		prev?: string;
		next?: string;
	}

	let { content, prev, next }: Props = $props();
</script>

<section class="flex h-full flex-col">
	<header class="flex items-center gap-4 bg-red-700 px-2 py-1 text-red-100 lg:px-6">
		<button class="rounded p-2 transition-colors hover:bg-red-600">
			<Menu />
		</button>
		<h2 class="text-xl font-bold">Tour de Kaba</h2>
	</header>

	<div class="!w-full grow overflow-y-auto p-4 lg:p-8">
		<div
			class="prose prose-neutral prose-invert prose-h1:text-2xl prose-h1:font-bold
			prose-h1:text-neutral-100 prose-pre:border prose-pre:border-neutral-700
			prose-pre:bg-neutral-900 prose-pre:text-neutral-400"
		>
			{@html content}
		</div>
	</div>

	<TextPanelNavigation {prev} {next} />
</section>
