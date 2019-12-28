const $ = {};

[

'stamp',
'Ticket',
'book'

] .forEach ( ( property ) => {

$ [ property ] = require ( './' + property );

} );

const descriptor = module .exports;

const ticket = descriptor .value = function ticket ( args ) {

if ( args .stamp )
return {

stamp: args .stamp,
ticket: $ .book [ args .stamp ] || false

};

const stamp = $ .stamp ();

$ .book [ stamp ] = new $ .Ticket ();

Object .defineProperty ( $ .book [ stamp ], 'play', {

value: args .play,
enumerable: true

} );

return {

stamp: stamp,
ticket: $ .book [ stamp ]

};

};
