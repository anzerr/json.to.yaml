
### `Intro`
![GitHub Actions status | publish](https://github.com/anzerr/json.to.yaml/workflows/publish/badge.svg)

Convert JSON to YAML

#### `Install`
``` bash
npm install --save git+https://github.com/anzerr/json.to.yaml.git
npm install --save @anzerr/json.to.yaml
```

### `Example`
``` javascript
const YAML = require('./index.js');
YAML.stringify({
	foo: 'bar',
	baz: ['qux','quxx']
});
```