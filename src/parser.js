
const ENUM = require('./enum.js');

class Parser {

	constructor(config = {}) {
		this.indentLevel = '';
		this.type = {
			function: 'func'
		};
		this.enum = {
			...ENUM,
			...config
		};
	}

	typeof(val) {
		let type = Array.isArray(val) ? 'array' : typeof val;
		return this[this.type[type] || type];
	}

	undefined () {
		return 'null';
	}

	null() {
		return 'null';
	}

	number(x) {
		return x;
	}

	boolean(x) {
		return x ? 'true' : 'false';
	}

	string(x) {
		let output = '|';
		if (x.length <= this.enum.MAX_TEXT && x.indexOf('\n') === -1) {
			return JSON.stringify(x);
		}
		let text = x.split(/\\n|\n/);
		this.indentLevel = this.indentLevel.replace(/$/, '  ');
		for (let i in text) {
			output += '\n' + this.indentLevel + text[i];
		}
		this.indentLevel = this.indentLevel.replace(/\s{2}/, '');

		return output;
	}

	date(x) {
		return x.toJSON();
	}

	array(x) {
		let output = '';

		if (x.length === 0) {
			output += '[]';
			return output;
		}

		this.indentLevel = this.indentLevel.replace(/$/, '  ');
		for (let i in x) {
			output += '\n' + this.indentLevel + '- ' + this.typeof(x[i]).apply(this, [x[i]]);
		}
		this.indentLevel = this.indentLevel.replace(/ {2}/, '');

		return output;
	}

	object(x) {
		let output = '';

		if (x && Object.keys(x).length === 0) {
			output += '{}';
			return output;
		}

		this.indentLevel = this.indentLevel.replace(/$/, '  ');
		for (let i in x) {
			if (typeof x[i] !== 'undefined') {
				output += '\n' + this.indentLevel + i + ': ' + this.typeof(x[i]).apply(this, [x[i]]);
			}
		}
		this.indentLevel = this.indentLevel.replace(/ {2}/, '');

		return output;
	}

	func() {
		return '[object Function]';
	}

}

module.exports = Parser;
