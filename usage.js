#!/usr/bin/env node

const Scenarist = require ( '@blindoutofmind/scenarist' );
const markdown = require ( './markdown' );
const $ = Scenarist ( {}, {

play: '>'

} );

$ ( $ .live, markdown );

$ ( '#', "Use Scenarist" );
