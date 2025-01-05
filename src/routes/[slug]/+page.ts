import array from '../../data/array.md?raw';
import conditional from '../../data/conditional.md?raw';
import eachLoop from '../../data/each-loop.md?raw';
import fnAdvanced from '../../data/function-advanced.md?raw';
import fn from '../../data/function.md?raw';
import helloWorld from '../../data/hello-world.md?raw';
import notFound from '../../data/not-found.md?raw';
import variable from '../../data/variable.md?raw';
import whileLoop from '../../data/while-loop.md?raw';
import { error } from '@sveltejs/kit';
import { marked } from 'marked';
import type { PageLoad } from './$types';

const posts = [
	{
		slug: 'hello-world',
		content: helloWorld,
		prev: '/',
		next: '/variable',
	},
	{
		slug: 'variable',
		content: variable,
		prev: '/hello-world',
		next: '/conditional',
	},
	{
		slug: 'conditional',
		content: conditional,
		prev: '/variable',
		next: '/while-loop',
	},
	{
		slug: 'while-loop',
		content: whileLoop,
		prev: '/conditional',
		next: '/array',
	},
	{
		slug: 'array',
		content: array,
		prev: '/while-loop',
		next: '/each-loop'
	},
	{
		slug: 'each-loop',
		content: eachLoop,
		prev: '/array',
		next: '/function',
	},
	{
		slug: 'function',
		content: fn,
		prev: '/each-loop',
		next: '/function-advanced',
	},
	{
		slug: 'function-advanced',
		content: fnAdvanced,
		prev: '/function',
	},
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
