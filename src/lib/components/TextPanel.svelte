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
	<header class="flex items-center gap-4 border-b border-slate-700 bg-slate-900 px-4 py-2">
		<button class="rounded p-2 hover:bg-slate-800 hover:text-slate-300">
			<Menu />
		</button>

		<h2 class="text-xl">Tour de Kaba</h2>
	</header>

	<div class="grow overflow-y-auto !w-full px-4 py-6">
		<div
			class="prose prose-slate prose-invert prose-h1:text-3xl prose-h1:font-bold"
		>
			{@html content}
		</div>
	</div>

	<footer class="px-4 py-2 border-t border-slate-700">
		<TextPanelNavigation {prev} {next} />
	</footer>
</section>
