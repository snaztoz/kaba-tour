import array from '../../data/array.md?raw';
import arrayCode from '../../data/code/array.txt?raw';
import conditional from '../../data/conditional.md?raw';
import conditionalCode from '../../data/code/conditional.txt?raw';
import eachLoop from '../../data/each-loop.md?raw';
import eachLoopCode from '../../data/code/each-loop.txt?raw';
import fnAdvanced from '../../data/function-advanced.md?raw';
import fnAdvancedCode from '../../data/code/function-advanced.txt?raw';
import fn from '../../data/function.md?raw';
import fnCode from '../../data/code/function.txt?raw';
import helloWorld from '../../data/hello-world.md?raw';
import helloWorldCode from '../../data/code/hello-world.txt?raw';
import variable from '../../data/variable.md?raw';
import variableCode from '../../data/code/variable.txt?raw';
import whileLoop from '../../data/while-loop.md?raw';
import whileLoopCode from '../../data/code/while-loop.txt?raw';

export const posts = [
	{
		slug: 'hello-world',
		content: helloWorld,
		code: helloWorldCode
	},
	{
		slug: 'variable',
		content: variable,
		code: variableCode
	},
	{
		slug: 'conditional',
		content: conditional,
		code: conditionalCode
	},
	{
		slug: 'while-loop',
		content: whileLoop,
		code: whileLoopCode
	},
	{
		slug: 'array',
		content: array,
		code: arrayCode
	},
	{
		slug: 'each-loop',
		content: eachLoop,
		code: eachLoopCode
	},
	{
		slug: 'function',
		content: fn,
		code: fnCode
	},
	{
		slug: 'function-advanced',
		content: fnAdvanced,
		code: fnAdvancedCode
	}
];
