node-resemble
=============

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

resemble(github_img1).onComplete(function(data){
    console.log(data);
});

resemble(github_img1).compareTo(github_img2).onComplete(function(data){
    console.log(data);
});
```