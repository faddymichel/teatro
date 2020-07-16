export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function scene ( { characters, setting, establishment } ) {

const scenario = this;
const signature = Symbol ();
scenario .scenes [ signature ] = {};

if ( typeof establishment === 'function' )
scenario .scenes [ signature ] .establishment = establishment;

if ( typeof characters === 'object' ) {

const { events, cast, action } = characters;

if ( typeof cast === 'string' )
for ( let i = 0; i < cast .length; i++ )
scenario .scenes [ cast [ i ] ] = signature;

if ( events && events .length > 0 )
for ( const event of events )
scenario .scenes [ event ] = signature;

if ( typeof action === 'function' )
scenario .scenes [ signature ] .action = action;

}

Object .assign ( scenario .setting, setting );

scenario .signatures .push ( signature );

};
