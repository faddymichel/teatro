const stamp = require ( './stamp' );
const Ticket = require ( './Ticket' );
const book = require ( './book' );

const descriptor = module .exports;

descriptor .value = function issue ( play ) {

const $ = {};

$ .stamp = stamp ();

$ .ticket = book [ $ .stamp ] = new Ticket ();

Object .defineProperty ( $ .ticket, 'play', {

value: play,
enumerable: true

} );

return $;

};
