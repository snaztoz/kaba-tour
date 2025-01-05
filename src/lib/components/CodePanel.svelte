<script lang="ts">
	import { EditorState } from '@codemirror/state';
	import { EditorView, gutter, keymap, lineNumbers } from '@codemirror/view';
	import { defaultKeymap, indentWithTab } from '@codemirror/commands';
	import { indentUnit } from '@codemirror/language';

	let { initialCode }: { initialCode: string } = $props();

	let editor: HTMLDivElement;
	let view: EditorView;

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

	$effect(() => {
		let startState = EditorState.create({
			doc: initialCode,
			extensions: [
				theme,
				lineNumbers(),
				gutter({}),
				indentUnit.of('    '),
				keymap.of([...defaultKeymap, indentWithTab])
			]
		});

		view = new EditorView({
			state: startState,
			parent: editor
		});

		return () => view.destroy();
	});
</script>

<section class="grow">
	<div bind:this={editor} class="h-full"></div>
</section>
