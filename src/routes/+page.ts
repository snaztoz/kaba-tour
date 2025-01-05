import home from '../data/home.md?raw';
import { marked } from 'marked';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	return {
		content: await marked.parse(home),
		next: 'hello-world'
	};
};
