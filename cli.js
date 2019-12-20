#!/usr/bin/env node

'use strict';

const argv = require ( './argv.js' );
const Teatro = require ( './' );
const teatro = new Teatro ( argv );

teatro .on ( 'host', ( host ) => {

console .log ( '#ticket', '#host', host );

} );
