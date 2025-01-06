<script lang="ts">
	import CodeMirror from 'svelte-codemirror-editor';
	import { theme } from '$lib/constants/editorTheme';

	interface Props {
		code: string;
		update: (newCode: string) => void;
	}

	let { code, update }: Props = $props();
</script>

<section class="grow">
	<CodeMirror value={code} {theme} tabSize={4} class="h-full" on:change={(s) => update(s.detail)} />
</section>
