
const Parser = require('./src/parser.js');

class YAML {

	stringify(data, config) {
		return '---' + (new Parser(config))[typeof data](data) + '\n';
	}

}

module.exports = new YAML();
