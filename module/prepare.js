const $ = require ( './symbol' );
const { issue, retrieve } = require ( './ticket/symbol' );
const _Usher = require ( './Usher' );
const { start } = require ( './role/symbol' );
const { Server } = require ( './ws' );

const descriptor = module .exports;

descriptor .value = function prepare () {

const teatro = this;

const stamp = teatro [ $ .ticket ] [ issue ] ( _Usher ( teatro [ $ .ticket ], retrieve ), Symbol () );
const ticket = teatro [ $ .ticket ] [ retrieve ] ( stamp );

const server = new Server ( options );

server .on ( 'connection', ( socket ) => {

let usher = new ticket .Role ( socket );
usher [ start ] ();

usher .on ( 'finish', ( role ) => {

role .once ( 'finish', () => {

usher [ start ] ();

} );

} );

} );

};
