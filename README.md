
### `Intro`
Convert JSON to YAML

#### `Install`
``` bash
npm install --save git+ssh://git@github.com/anzerr/json.to.yaml.git
```

### `Example`
``` javascript
const YAML = require('./index.js');
YAML.stringify({
	foo: 'bar',
	baz: ['qux','quxx']
});
```