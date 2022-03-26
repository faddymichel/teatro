#!/usr/bin/env node

const setting = { Math };

setting .yallah = "Sallah Abdallah!";

const Scenarist = require ( './' );
const Test = function Test ( scene ) {

scene .conflict = setting;

};

const $ = Scenarist ( Test );

$ ( 'Math', 'random', 'Faddy', 'Genius' )
.then ( number => console .log ( number ) );

$ ( 'yallah' )
.then ( resolution => console .log ( resolution ) );
