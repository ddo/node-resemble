node-resemble [![Build Status][semaphoreci-img]][semaphoreci-url]
=============

[![version][version-img]][version-url]
[![download][download-img]][download-url]

[![dependency][dependency-img]][dependency-url]

[![climate][climate-img]][climate-url]

[download-img]: https://img.shields.io/npm/dm/node-resemble.svg?style=flat-square
[download-url]: https://www.npmjs.com/package/node-resemble

[version-img]: https://img.shields.io/npm/v/node-resemble.svg?style=flat-square
[version-url]: https://www.npmjs.com/package/node-resemble

[dependency-img]: https://img.shields.io/david/ddo/node-resemble.svg?style=flat-square
[dependency-url]: https://david-dm.org/ddo/node-resemble

[climate-img]: https://img.shields.io/codeclimate/github/ddo/node-resemble.svg?style=flat-square
[climate-url]: https://codeclimate.com/github/ddo/node-resemble

[semaphoreci-img]: https://semaphoreci.com/api/v1/ddo/node-resemble/branches/master/badge.svg
[semaphoreci-url]: https://codeclimate.com/github/ddo/node-resemble

Node port of [Resemble.js](https://github.com/Huddle/Resemble.js).

## installation

```bash
$ npm i node-resemble
```

## note

[node-canvas](https://github.com/Automattic/node-canvas)  is a [Cairo](http://cairographics.org/) backed Canvas implementation for NodeJS.

Unless previously installed you'll need Cairo. For system-specific installation view the node-canvas [Wiki](https://github.com/Automattic/node-canvas/wiki/_pages).

## example

```js
var fs = require('fs');

var resemble = require('node-resemble');

var github_img1 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAJlQTFRFJiYmJiYmJSUlJiYmKysrJiYmJSUlJiYmJSUlJCQkJiYmJycnJiYmJiYmJSUlJiYmJSUlJiYmJSUlJCQkJycnJCQkJycnJiYmJSUlJiYmJiYmJycnJiYmJiYmJSUlJycnJycnJCQkJSUlJiYmJiYmJycnJiYmJycnJiYmJSUlJiYmJiYmJycnJiYmEhISISEhJycnAAAAJiYmQmWwmAAAADJ0Uk5T9JNotgyiTK2KR0P7Zij+PYni/StBMdmBpKnq5tbw1VXsKu9RUM3O7cl8V5ql3w42+gB0ejcrAAAApElEQVQY012PRRIEMQwDs8zMOAzhyP9/3CYDl9XJ7irZEoOXldo5LW2YGWAUlVwIXpIyAZi6ytAor2rjgao2pgXjpFJglvLLdrbez4eT1TIny2QJS50WKCXTHLceDMA1cwLXHsQQjrkIhx4wRC5YRj2og0UW2Ll2P05RSP82g72/iJ6PMzL/FipOgIJIA6cQzEdPBT7eAZE20UO5b7jy7sr91f8BZR4qkBlEJUYAAAAASUVORK5CYII=';

var github_img2 = fs.readFileSync('./example.png');

resemble(github_img1).onComplete(function(data) {
    console.log(data);
});

resemble(github_img1).compareTo(github_img2).onComplete(function(data) {
    console.log(data);
});
```

## test

all PR should be tested before submit

```sh
npm i
npm test
```