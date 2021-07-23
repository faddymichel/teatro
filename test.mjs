#!/usr/bin/env node

import Scenarist from './index.mjs';

const setting = {};
const signature = Symbol ();
const $ = Scenarist ( setting, signature );

$ ( {

value: () => console .log (
setting === $ ( signature ) ? "scenario ( signature ) === setting" : "#error scenario ( signature ) !== setting"
),
cue: '-s-c'

}, '-s', '--setting' );

$ ( () => console .log ( "Passed test!" ), '-s-c', '--setting-cue' );

$ ( ... process .argv .slice ( 2 ) );
