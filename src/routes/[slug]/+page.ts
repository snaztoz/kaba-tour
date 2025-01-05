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
		content: helloWorld
	},
	{
		slug: 'variable',
		content: variable
	},
	{
		slug: 'conditional',
		content: conditional
	},
	{
		slug: 'while-loop',
		content: whileLoop
	},
	{
		slug: 'array',
		content: array
	},
	{
		slug: 'each-loop',
		content: eachLoop
	},
	{
		slug: 'function',
		content: fn
	},
	{
		slug: 'function-advanced',
		content: fnAdvanced
	}
];

export const load: PageLoad = async ({ params }) => {
	const i = posts.findIndex((p) => p.slug === params.slug);
	if (i < 0) {
		return error(404, await marked.parse(notFound));
	}

	const prev = i > 0 ? posts[i - 1].slug : '/';
	const next = i < posts.length - 1 ? posts[i + 1].slug : undefined;

	return {
		slug: posts[i].slug,
		content: await marked.parse(posts[i].content),
		prev,
		next
	};
};
