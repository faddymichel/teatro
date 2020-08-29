export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function cast ( { character, setting, establishment } ) {

const scenario = this;
const signature = Symbol ();
scenario .script [ signature ] = {};

if ( typeof establishment === 'function' )
scenario .establishments .push ( establishment );

if ( typeof character === 'object' ) {

const { events, action } = character;

if ( events && events .length > 0 )
for ( const event of events )
scenario .script [ event ] = signature;

if ( typeof action === 'function' )
scenario .script [ signature ] .action = action;

}

Object .assign ( scenario .setting, setting );

};
