export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function prepare ( { name, setting, cast, establish }, cue, blooper ) {

const scenarist = this;
const scenario = scenarist .scenarios [ name ];

if ( ! scenario )
return blooper ( '#scenario #undefined' );

for ( const character of cast )
scenario .cast ( character );

Object .assign ( scenario .setting, setting, { scenarist } );

if ( establish )
scenarist .establish ( name );

return cue ();

};
