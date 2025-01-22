<script lang="ts">
	import Close from 'lucide-svelte/icons/x';

	interface Props {
		stdout: string;
		stderr: string;
		clearOutput: () => void;
	}

	let { stdout, stderr, clearOutput }: Props = $props();
</script>

{#if stdout || stderr}
	<section class="h-1/2 shrink-0">
		<div class="flex h-full flex-col gap-1.5 bg-neutral-800 px-4 py-2">
			<div class="flex items-center gap-2 text-neutral-600">
				<button onclick={clearOutput}>
					<Close size={16} class="hover:text-neutral-500" />
				</button>
				<h3 class="select-none text-xs uppercase tracking-wide">output</h3>
			</div>
			<div class="grow overflow-y-auto rounded bg-neutral-900 p-2 font-mono text-neutral-400">
				{@html stdout}
				{#if stderr}
					<p>
						<span class="text-red-500">error: </span>
						<span>{stderr}</span>
					</p>
				{/if}
			</div>
		</div>
	</section>
{/if}
