<script lang="ts">
	import CodeMirror from 'svelte-codemirror-editor';
	import Play from 'lucide-svelte/icons/play';
	import RotateCcw from 'lucide-svelte/icons/rotate-ccw';
	import { theme } from '$lib/constants/editorTheme';

	interface Props {
		code: string;
		isRunning: boolean;
		reset: () => void;
		update: (newCode: string) => void;
		run: () => void;
	}

	let { code, isRunning, reset, update, run }: Props = $props();
</script>

<section class="relative h-full">
	<CodeMirror value={code} {theme} tabSize={4} class="h-full" on:change={(s) => update(s.detail)} />

	<footer class="absolute bottom-4 right-4 flex justify-end gap-4 md:right-8">
		<button
			class="flex select-none items-center gap-2 rounded bg-neutral-600 px-4 py-2
				text-neutral-200 transition-colors hover:bg-neutral-700"
			onclick={() => reset()}
		>
			<RotateCcw />
			Reset
		</button>

		<button
			class={[
				`flex select-none items-center gap-2 rounded bg-red-700 px-4 py-2 text-red-100 transition-colors hover:bg-red-800`,
				isRunning && 'opacity-50'
			]}
			onclick={() => run()}
		>
			<Play></Play>
			{isRunning ? 'Running...' : 'Run'}
		</button>
	</footer>
</section>
