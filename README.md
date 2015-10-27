# JavaScript port of [mimic](https://github.com/reinderien/mimic)

## Usage

```js
import { decode, encode } from 'mimic.js';

const encodedCode = encode(code); // or encode(code, opts);
const decodedCode = decode(code);
```

## Available options

- `chance` - replacement percent [0-100] (default - 1)
