import startCase from 'lodash-es/startCase';
import { posts } from './posts';

export const pages = [
	{
		slug: '/',
		title: 'Welcome'
	},
	...posts.map((post) => ({
		slug: post.slug,
		title: startCase(post.slug)
	}))
];
