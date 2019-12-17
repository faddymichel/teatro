#!/usr/bin/env node

'use strict';

const teatro = require ( './' );

console .log ( teatro );

teatro .on ( 'host', ( host ) => {

console .log ( '#ticket', 'host', host );

} );
