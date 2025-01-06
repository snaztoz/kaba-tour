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
import end from '../../data/end.md?raw';
import fnParameters from '../../data/function-parameters.md?raw';
import fnParametersCode from '../../data/code/function-parameters.txt?raw';
import fnReturnValue from '../../data/function-return-value.md?raw';
import fnReturnValueCode from '../../data/code/function-return-value.txt?raw';
import fnType1 from '../../data/function-type-1.md?raw';
import fnType1Code from '../../data/code/function-type-1.txt?raw';
import fnType2 from '../../data/function-type-2.md?raw';
import fnType2Code from '../../data/code/function-type-2.txt?raw';
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
		slug: 'function-type-1',
		content: fnType1,
		code: fnType1Code
	},
	{
		slug: 'function-type-2',
		content: fnType2,
		code: fnType2Code
	},
	{
		slug: 'end',
		content: end
	}
];
