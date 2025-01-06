import { EditorView } from '@codemirror/view';

export const theme = EditorView.theme(
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
