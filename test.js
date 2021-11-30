#!/usr/bin/env node

const Scenarist = require ( './' );
const $ = Scenarist ( { Math } );

$ ( 'Math', 'random' )
.then ( number => console .log ( number ) );

$ ( 'Math', 'random' )
.then ( number => console .log ( number ) );
