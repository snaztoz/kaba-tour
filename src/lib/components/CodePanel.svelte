<script lang="ts">
	import { EditorState } from '@codemirror/state';
	import { EditorView, gutter, keymap, lineNumbers } from '@codemirror/view';
	import { defaultKeymap, indentWithTab } from '@codemirror/commands';

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
				lineHeight: '24px'
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
				paddingRight: '0.75rem'
			}
		},
		{ dark: true }
	);

	let startState = EditorState.create({
		doc: 'Hello World',
		extensions: [theme, lineNumbers(), gutter({}), keymap.of([...defaultKeymap, indentWithTab])]
	});

	$effect(() => {
		view = new EditorView({
			state: startState,
			parent: editor
		});
	});
</script>

<section class="grow">
	<div bind:this={editor} class="h-full"></div>
</section>
