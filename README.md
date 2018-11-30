# [@fav/prop.define][repo-url] [![NPM][npm-img]][npm-url] [![MIT License][mit-img]][mit-url] [![Build Status][travis-img]][travis-url] [![Coverage status][coverage-img]][coverage-url]

Defines object properities.

> "fav" is an abbreviation of "favorite" and also the acronym of "for all versions".
> This package is intended to support all Node.js versions and many browsers as possible.
> At least, this package supports Node.js >= v0.10 and major Web browsers: Chrome, Firefox, IE11, Edge, Vivaldi and Safari.


## Install

To install from npm:

```sh
$ npm install --save @fav/prop.define
```

***NOTE:*** *npm < 2.7.0 does not support scoped package, but old version Node.js supports it. So when you use such older npm, you should download this package from [github.com][repo-url], and move it in `node_modules/@fav/prop.define/` directory manually.*


## Usage

For Node.js:

```js
var define = require('@fav/prop.define');
var obj = {};

define.immutable(obj, 'HIDDEN_CONSTANT_VALUE', 123);
console.log(obj.HIDDEN_CONSTANT_VALUE); // => 123

define.mutable(obj, 'hiddenVariable', 456);
console.log(obj.hiddenVariable); // => 456

obj.func = function() {
  console.log(this.HIDDEN_CONSTANT_VALUE);
};
obj.func(); // => 123

define.override(obj, function func() {
  func.$uper();
  console.log(this.hiddenVariable);
});
obj.func();
// => 123
//    456
```

For Web browsers:

```html
<script src="fav.prop.assign.min.js"></script>
<script>
var define = fav.prop.define;
define.immutable(obj, 'HIDDEN_CONSTANT_VALUE', 123);
console.log(obj.HIDDEN_CONSTANT_VALUE); // => 123

define.mutable(obj, 'hiddenVariable', 456);
console.log(obj.hiddenVariable); // => 456

obj.func = function() {
  console.log(this.HIDDEN_CONSTANT_VALUE);
};
obj.func(); // => 123

define.override(obj, function func() {
  func.$uper();
  console.log(this.hiddenVariable);
});
obj.func();
// => 123
//    456
</script>
```


## API

### <u>define.immutable(obj, name, value) : void</u>

Defines an read-only and unenumerable property to the specified object.

#### Parameters:

| Parameter |   Type   | Description              |
|-----------|:--------:|--------------------------|
| *obj*     |  object  | The target object.       |
| *name*    |  string  | The property name.       |
| *value*   |  *any*   | The property value.      |

### <u>define.mutable(obj, name, value) : void</u>

Defines an writable and unenumerable property to the specified object.

#### Parameters:

| Parameter |   Type   | Description              |
|-----------|:--------:|--------------------------|
| *obj*     |  object  | The target object.       |
| *name*    |  string  | The property name.       |
| *value*   |  *any*   | The property value.      |

### <u>define.override(obj, name, fn) : void</u>

Redefines a property function of the specified object.

The original function can be accessed by <code>*name*.$uper</code>.

| Parameter |   Type   | Description              |
|-----------|:--------:|--------------------------|
| *obj*     |  object  | The target object.       |
| *name*    |  string  | The property name.       |
| *fn*      | function | The property function.   |

### <u>define.override(obj, namedFn) : void</u>

Redefines a property function of the specified object with named function.

The original function can be accessed by <code>*namedFn*.$uper</code>.


| Parameter |   Type   | Description              |
|-----------|:--------:|--------------------------|
| *obj*     |  object  | The target object.       |
| *namedFn* | function | The named function.      |

## Checked

### Node.js (11〜)

| Platform  |   11   |
|:---------:|:------:|
| macOS     |&#x25ef;|
| Windows10 |&#x25ef;|
| Linux     |&#x25ef;|

### Node.js (4〜10)

| Platform  |   4    |   5    |   6    |   7    |   8    |   9    |   10   |
|:---------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### io.js (1〜3)

| Platform  |   1    |   2    |   3    |
|:---------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|

### Node.js (〜0.12)

| Platform  |  0.8   |  0.9   |  0.10  |  0.11  |  0.12  |
|:---------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### Web browsers

| Platform  | Chrome | Firefox | Vivaldi | Safari |  Edge  | IE11   |
|:---------:|:------:|:-------:|:-------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef; |&#x25ef; |&#x25ef;|   --   |   --   |
| Windows10 |&#x25ef;|&#x25ef; |&#x25ef; |   --   |&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef; |&#x25ef; |   --   |   --   |   --   |


## License

Copyright (C) 2018 Takayuki Sato

This program is free software under [MIT][mit-url] License.
See the file LICENSE in this distribution for more details.

[repo-url]: https://github.com/sttk/fav-prop.define/
[npm-img]: https://img.shields.io/badge/npm-v0.1.0-blue.svg
[npm-url]: https://www.npmjs.com/package/@fav/prop.define
[mit-img]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT
[travis-img]: https://travis-ci.org/sttk/fav-prop.define.svg?branch=master
[travis-url]: https://travis-ci.org/sttk/fav-prop.define
[coverage-img]: https://coveralls.io/repos/github/sttk/fav-prop.define/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/sttk/fav-prop.define?branch=master
