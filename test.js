
const YAML = require('./index.js');

let a = {
	foo: 'bar',
	baz: [
		'qux',
		'quxx'
	],
	corge: null,
	grault: 1,
	garply: true,
	waldo: 'false',
	fred: 'undefined'
};

console.log(YAML.stringify(a));
