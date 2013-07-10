# Profile [![Dependency Status](https://david-dm.org/AoJ/profile.png)](https://david-dm.org/AoJ/profile)

  measure time and memory to debugging app

## Installation

    $ npm install https://github.com/AoJ/profile/tarball/master

## Example

```js
var profile = require('profile');
profile.allow('example');

var tick = profile('example').tick;
tick('processed');
tick('results');

```

```
> node example.js
6 Jul 21:22:06 - example        0ms     1.75mb/2.91mb           processed
6 Jul 21:22:06 - example        1ms     2.4mb/3.89mb            results
```

## License 

(The MIT License)

Copyright (c) 2013 AoJ &lt;aoj@n13.cz&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
