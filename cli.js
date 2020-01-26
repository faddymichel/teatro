#!/usr/bin/env node

'use strict';

const argv = require ( './argv.js' );
const Teatro = require ( './' );

const options = {};
options .server = {

host: argv .host,
port: argv .port

};

const teatro = new Teatro ( options );

/*
const teatro2 = new Teatro ( {

server: {

port: 1300

}

} );
console .log ( 'teatro2:', teatro2 );
*/ 

teatro .on ( 'open', require ( './open' ) );

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
