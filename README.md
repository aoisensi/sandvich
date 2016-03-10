# sandvich

[![Dependency status](https://img.shields.io/david/aoisensi/sandvich.svg?style=flat)](https://david-dm.org/aoisensi/sandvich)
[![devDependency Status](https://img.shields.io/david/dev/aoisensi/sandvich.svg?style=flat)](https://david-dm.org/aoisensi/sandvich#info=devDependencies)
[![Build Status](https://img.shields.io/travis/aoisensi/sandvich.svg?style=flat&branch=master)](https://travis-ci.org/aoisensi/sandvich)

[![NPM](https://nodei.co/npm/sandvich.svg?style=flat)](https://npmjs.org/package/sandvich)

## Warning

    I'm noob JS programmer
    I think, this code is feeder

## Installation

    npm install sandvich

## Usage Example

```javascript
require("../lib/sandvich")("STEAM_WEB_API_KEY", function(err, sandvich) {
  var params = { steamids: "76561198049739081" }; //It's me!! aoisensi
  sandvich.ISteamUser.GetPlayerSummaries(params, function(e, result) {
    console.log(JSON.stringify(result, null, '  '));
  });
});
```

## License

The MIT License (MIT)

Copyright 2016 aoisensi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
