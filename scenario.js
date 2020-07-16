import { Scenario } from './scenario/index.js';

export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function scenario ( { name, paths, establish } ) {

if ( typeof name !== 'string' && typeof name !== 'symbol' )
return;

const scenarist = this;
const scenario = scenarist .scenarios [ name ] = new Scenario ();
const imports = [];

for ( const path of paths )
imports .push (
import ( path )
);

Promise .all ( imports )
.then ( ( scenes ) => {

for ( const scene of scenes )
scenario .scene (
scene
);

Object .assign ( scenario .setting, { scenarist } );

if ( establish )
scenarist .establish ( name );

} );

};
