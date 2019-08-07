
### `Intro`
Convert JSON to YAML

#### `Install`
``` bash
npm install --save git+https://github.com/anzerr/json.to.yaml.git
<<<<<<< HEAD
npm install --save @anzerr/json.to.yaml
=======
>>>>>>> 2b2272b47f85b35430f62c75092a67b8d7451361
```

### `Example`
``` javascript
const YAML = require('./index.js');
YAML.stringify({
	foo: 'bar',
	baz: ['qux','quxx']
});
```