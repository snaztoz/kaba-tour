import array from '../../data/array.md?raw';
import arrayCode from '../../data/code/array.txt?raw';
import arrayManipulation from '../../data/array-manipulation.md?raw';
import arrayManipulationCode from '../../data/code/array-manipulation.txt?raw';
import conditional from '../../data/conditional.md?raw';
import conditionalCode from '../../data/code/conditional.txt?raw';
import continueAndBreakLoop from '../../data/continue-and-break-loop.md?raw';
import continueAndBreakLoopCode from '../../data/code/continue-and-break-loop.txt?raw';
import eachLoop from '../../data/each-loop.md?raw';
import eachLoopCode from '../../data/code/each-loop.txt?raw';
import fnAdvanced from '../../data/function-advanced.md?raw';
import fnAdvancedCode from '../../data/code/function-advanced.txt?raw';
import fnParameters from '../../data/function-parameters.md?raw';
import fnParametersCode from '../../data/code/function-parameters.txt?raw';
import fnReturnValue from '../../data/function-return-value.md?raw';
import fnReturnValueCode from '../../data/code/function-return-value.txt?raw';
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
		slug: 'continue-and-break-loop',
		content: continueAndBreakLoop,
		code: continueAndBreakLoopCode
	},
	{
		slug: 'array',
		content: array,
		code: arrayCode
	},
	{
		slug: 'array-manipulation',
		content: arrayManipulation,
		code: arrayManipulationCode
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
		slug: 'function-parameters',
		content: fnParameters,
		code: fnParametersCode
	},
	{
		slug: 'function-return-value',
		content: fnReturnValue,
		code: fnReturnValueCode
	},
	{
		slug: 'function-advanced',
		content: fnAdvanced,
		code: fnAdvancedCode
	}
];
