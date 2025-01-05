import notFound from '../../data/not-found.md?raw';
import { error } from '@sveltejs/kit';
import { marked } from 'marked';
import { posts } from '$lib/constants/posts';
import type { PageLoad } from './$types';

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
		code: posts[i].code,
		prev,
		next
	};
};
