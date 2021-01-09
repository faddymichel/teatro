export const descriptor = {};

descriptor .value = function act ( key, ... events ) {

const scenario = this;
const signature = typeof scenario .script [ key ] === 'object' ? key : scenario .script [ key ];

if ( typeof signature !== 'symbol' )
throw new ReferenceError ( '#scenarist #scenario #act #error Invalid scenario signature. A script can not be referenced using false signature.' );

for ( const event of events )
if ( [ 'string', 'symbol' ] .includes ( typeof event ) )
scenario .script [ event ] = signature;

};
