#!/usr/bin/env node

'use strict';

const args = require ( './args' );

const ws = require ( 'ws' );

const server = new ws .Server ( {

host: args [ '--host' ] || 'localhost',
port: args [ '--port' ] || 1313

} );

server .on ( 'listening', () => {

console .log ( 'Bostagy:', 'listening ...' );

} );

server .on ( 'connection', ( socket, request ) => {

console .log ( 'Bostagy:', 'connected to a new client ...' );

socket .on ( 'message', ( data ) => {

process .stdout .write ( data );

} );

process .stdin .setEncoding ( 'utf8' );
process .stdin .on ( 'data', ( data ) => {

console .log ( data );
socket .send ( data );

} );

} );
