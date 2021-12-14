
console.log('hello');

let Jetty = require('jetty');
let jetty = new Jetty(process.stdout);

jetty.clear();

let y = 3;
let x = 2;
let isBg = true;

jetty.rgb(100, isBg).moveTo([y, x]).text("HELLO WORLD");

jetty.text('\n');