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
	<header
		class="flex items-center gap-4 border-b border-neutral-200 bg-emerald-600
			px-6 py-1 text-white"
	>
		<button class="rounded p-2 transition-colors hover:bg-emerald-500">
			<Menu />
		</button>

		<h2 class="text-xl font-bold">Tour de Kaba</h2>
	</header>

	<div class="!w-full grow overflow-y-auto p-8">
		<div
			class="prose prose-h1:text-2xl prose-h1:font-bold
			prose-pre:border prose-pre:bg-neutral-100 prose-pre:text-neutral-600"
		>
			{@html content}
		</div>
	</div>

	<footer class="border-t border-neutral-200 px-8 py-2">
		<TextPanelNavigation {prev} {next} />
	</footer>
</section>
