
const Parser = require('./src/parser.js');

class YAML {

	stringify(data) {
		return '---' + (new Parser())[typeof data](data) + '\n';
	}

}

module.exports = new YAML();
