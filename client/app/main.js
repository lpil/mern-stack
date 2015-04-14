var riot = require('riot');
require('./tags/hello_world.tag');

riot.mount('hello');

var [x, y] = [1, 2];

console.log(x);
console.log(y);
