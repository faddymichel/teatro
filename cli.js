#!/usr/bin/env node

'use strict';

const server = require ( 'server' );

process .on ( 'SIGINT', ()=> {

console .log ( 'closing server ...' );

server .close ( () => {

server .passes .forEach ( ( pass ) => {

pass .kill ();

console .log ( 'killed Pass:', pass .pid, '...' );

} );

} );

} );
