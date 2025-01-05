import helloWorld from '../../data/hello-world.md?raw';
import notFound from '../../data/not-found.md?raw';
import variable from '../../data/variable.md?raw';
import { error } from '@sveltejs/kit';
import { marked } from 'marked';
import type { PageLoad } from './$types';

const posts = [
	{
		slug: 'hello-world',
		content: helloWorld,
		prev: '/',
		next: '/variable'
	},
	{
		slug: 'variable',
		content: variable,
		prev: '/hello-world'
	}
];

export const load: PageLoad = async ({ params }) => {
	const post = posts.find((p) => p.slug === params.slug);
	if (!post) {
		return error(404, await marked.parse(notFound));
	}

	return {
		slug: post.slug,
		content: await marked.parse(post.content),
		prev: post.prev,
		next: post.next
	};
};
