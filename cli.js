#!/usr/bin/env node

'use strict';

const argv = require ( './argv.js' );
const Teatro = require ( './' );
const teatro = new Teatro ( argv );

teatro .on ( 'host', ( stamp, host ) => {

console .log ( '#ticket', '#host', stamp );

host .on ( 'play', ( subprocess ) => {

console .error ( '#play', subprocess .pid );

teatro .on ( 'close', () => {

subprocess .kill ();

console .error ( '#play #end', subprocess .pid );

} );

} );

} );

process .on ( 'SIGINT', () => {

console .error ( '#SIGINT' );

teatro .close ();

} );

process .on ( 'exit', ( code ) => {

console .error ( '#exit', code );

} );

process .stdout .on ( 'error', ( error ) => {

console .error ( '#error', '#stdout', '#code', error .code, '#message', error .message );

teatro .close ();

} );

teatro .on ( 'error', ( error ) => {

console .error ( '#error', '#teatro', '#code', error .code, '#message', error .message );

} );
