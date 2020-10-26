import { Scenario } from './scenario/index.js';

export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function scenario ( play ) {

const { parent, name, setting, cast, paths, establish } = play;

if ( typeof name !== 'string' && typeof name !== 'symbol' )
return;

const scenarist = this;
const scenario = scenarist .scenarios [ name ] = new Scenario ();

if ( ( typeof parent === 'string' || typeof parent === 'symbol' )
&& scenarist .scenarios [ parent ] instanceof Scenario )
Object .assign ( scenario, scenarist .scenarios [ parent ] );

if ( ! scenarist .display || ! scenarist .scenarios [ scenarist .display ] )
scenarist .display = name;

return new Promise ( ( ... directions ) => {

if ( cast instanceof Array )
scenarist .prepare ( play, ... directions );

else if ( paths instanceof Array ) {

const imports = [];

for ( const path of paths )
imports .push (
import ( path )
);

Promise .all ( imports )
.then ( ( cast ) => {

play .cast = cast;
scenarist .prepare ( play, ... directions );

} );

}

} );

};
