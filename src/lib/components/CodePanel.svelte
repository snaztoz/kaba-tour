<script lang="ts">
	import CodeMirror from 'svelte-codemirror-editor';
	import { EditorView } from '@codemirror/view';

	interface Props {
		code: string;
		update: (newCode: string) => void;
	}

	let { code, update }: Props = $props();

	const theme = EditorView.theme(
		{
			'&': {
				height: '100%',
				backgroundColor: '#171717',
				fontSize: '15px',
				color: '#a3a3a3'
			},
			'.cm-scroller': {
				fontFamily:
					'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;',
				lineHeight: '24px',
				overflowY: 'auto'
			},
			'.cm-gutters': {
				backgroundColor: '#171717',
				borderRightWidth: '1px',
				borderColor: '#404040',
				color: '#a3a3a3'
			},
			'& .cm-lineNumbers .cm-gutterElement': {
				minWidth: '3rem',
				paddingLeft: '0.75rem',
				paddingRight: '0.75rem',
				userSelect: 'none'
			}
		},
		{ dark: true }
	);
</script>

<section class="grow">
	<CodeMirror value={code} {theme} tabSize={4} class="h-full" on:change={(s) => update(s.detail)} />
</section>
