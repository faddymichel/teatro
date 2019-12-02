#!/usr/bin/env node

'use strict';

const argv = require ( 'yargs' )
.option ( 'host', {

alias: 'H',
group: 'Address:',
description: 'The host on which the server will listen for new connections.',
default: 'localhost',
type: 'string'

} )
.option ( 'port', {

alias: 'P',
group: 'Address:',
description: 'The port on which the server will listen for new connections.',
default: 1313,
type: 'number'

} )
.argv;

const teatro = require ( './' ) .open ( {

host: argv .host,
port: argv .port

} );

console .log ( 'Teatro:', 'Opening ...', teatro );

teatro .on ( 'open', ( ticket ) => {

console .log ( 'Teatro:', 'open ...', ticket );

} );

/* old

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

*/
