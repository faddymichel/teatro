#!/usr/bin/env node

const Scenarist = require ( './' );
const $ = Scenarist ( { 

console,
x: 1,
y: 2,
z: 3,
name: [ 'Faddy', 'Michel' ],
square: {

length: 10,
area: function area () {

console .log ( this );

return this .length ** 2;

}

}

}, scene => ( console .log ( scene ), scene .resolution ) );

$ ( 'console', 'log', "Yallah?" );
$ ( 'console', 'log', "Yallah?", $ ( 'x' ) );
$ ( 'console', 'log', "Yallah?", $ ( 'y' ) );
$ ( 'console', 'log', "Yallah?", $ ( 'z' ) );

$ ( 'console', 'log', "area:", $ ( 'square', 'area' ) );
