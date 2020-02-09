#!/usr/bin/env node

'use strict';

const argv = require ( './argv.js' );
const Teatro = require ( '@teatro13/teatro' );

const options = {};
options .ws = {

host: argv .host,
port: argv .port

};

const key = options .lock = Symbol ();

const teatro = new Teatro ();

teatro .on ( 'error', ( error ) => {

console .error ( '#error', '#teatro', '#code', error .code, '#message', error .message );

} );

teatro .on ( 'participant', require ( './participant' ) );

 teatro .on ( 'open', require ( './open' ) ( key ) );

process .on ( 'SIGINT', () => {

console .error ( '#SIGINT' );

teatro .close ( key );

} );

process .on ( 'exit', ( code ) => {

console .error ( '#exit', code );

} );

process .stdout .on ( 'close', () => {

console .error ( 'bye' );

teatro .close ( key );

} );

process .stdout .on ( 'error', ( error ) => {

console .error ( '#error', '#stdout', '#code', error .code, '#message', error .message );

teatro .close ( key );

} );

teatro .open ( options );
