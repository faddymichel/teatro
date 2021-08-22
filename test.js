#!/usr/bin/env node

const Scenarist = require ( 'scenarist' );
const $ = Scenarist ( { console } );

$ ( 'console', function () {

console .log ( this .$ );
console .log ( 'salah abdallah!' );

}, 'log' );

$ ( 'console', 'log', "yallah?!" );
$ ( 'console', 'log', "yallah?!" );
