#!/usr/bin/env node

const Scenarist = require ( './' );
const setting = Object .create ( Math );
const play = {};
const $ = Scenarist ( setting, play );

play .climax = ( { setting, direction } ) => setting .hasOwnProperty ( direction ) ? setting [ direction ] : undefined;

Object .defineProperty ( setting, 'r', { get: () => setting .random } );

console .log ( $ ( 'random' ) );
console .log ( $ ( 'r' ) );
