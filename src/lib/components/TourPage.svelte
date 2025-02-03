<script lang="ts">
	import CodePanel from './CodePanel.svelte';
	import ResultPanel from './ResultPanel.svelte';
	import TextPanel from './TextPanel.svelte';
	import init, { compile } from '$lib/kaba2js/kaba2js';

	interface Props {
		content: string;
		code?: string;
		prev: string;
		next?: string;
	}

	let { content, code: initialCode, prev, next }: Props = $props();

	let code = $state(initialCode);
	let isRunning = $state(false);
	let stdout: string = $state('');
	let stderr: string = $state('');

	async function run() {
		clearOutput();

		// Compile Kaba source code

		let js: string;
		try {
			js = await init().then(() => compile(code!));
		} catch (err) {
			stderr = err as string;
			return;
		}

		// Setup output buffer

		let output = '';

		function appendResult(result: any) {
			const escaped =
				typeof result === 'string'
					? result
							.replaceAll('&', '&amp;')
							.replaceAll('<', '&lt;')
							.replaceAll('>', '&gt;')
							.replaceAll('"', '&quot;')
							.replaceAll("'", '&#039;')
							.replaceAll('\n', '<br />')
					: result;
			output += `${escaped}<br/>`;
		}

		// Setup worker

		const workerCode = `
			self.onmessage = (event) => {
				try {
					const { js } = event.data;
					const f = new Function('$print', js);
					f((result) => self.postMessage({ type: 'result', data: result }));
					self.postMessage({ type: 'done' });
				} catch (err) {
					self.postMessage({ type: 'error', data: err.message });
				}
			};
		`;
		const blob = new Blob([workerCode], { type: 'application/javascript' });
		const worker = new Worker(URL.createObjectURL(blob));
		const workerPromise = new Promise((resolve, reject) => {
			worker.onmessage = (event) => {
				if (event.data.type === 'result') {
					appendResult(event.data.data);
				} else if (event.data.type === 'done') {
					resolve(null);
				} else if (event.data.type === 'error') {
					reject(new Error(event.data.data));
				}
			};

			worker.onerror = (err) => {
				reject(err);
			};
		});

		// Start code execution

		worker.postMessage({ js });

		const timeout = new Promise((_, reject) => {
			setTimeout(() => reject(new Error('Time limit exceeded (1s)')), 1000);
		});

		await Promise.race([workerPromise, timeout])
			.then(() => (stdout = output))
			.catch((e) => (stderr = e));

		// Cleanup

		worker.terminate();
	}

	function reset() {
		code = initialCode;
		clearOutput();
	}

	function clearOutput() {
		stdout = '';
		stderr = '';
	}
</script>

<main
	class="flex min-h-0 grow flex-col divide-y divide-neutral-700 md:flex-row
    md:divide-x md:divide-y-0"
>
	<div class="h-1/2 md:h-full md:w-1/2">
		<TextPanel {content} {prev} {next} />
	</div>

	<div class="relative h-1/2 md:h-full md:w-1/2">
		{#if code !== undefined}
			<div class="flex h-full flex-col">
				<div class="grow overflow-y-auto">
					<CodePanel
						{code}
						{isRunning}
						{reset}
						update={(s) => (code = s)}
						run={() => {
							isRunning = true;
							run().then(() => (isRunning = false));
						}}
					/>
				</div>
				<ResultPanel {stdout} {stderr} {clearOutput} />
			</div>
		{/if}
	</div>
</main>
