const book = require ( './book' );

const descriptor = module .exports;

descriptor .value = function ( id, socket ) {

const ticket = book [ id ];

if ( ! ticket )
return false;

ticket .play .listen ( socket );

};
