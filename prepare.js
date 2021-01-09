export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function prepare ( { signature, setting, cast, establish }, cue, blooper ) {

const scenarist = this;
const scenario = scenarist .book [ signature ];

if ( ! scenario )
return blooper ( '#scenario #undefined' );

for ( const character of cast )
scenario .cast ( character );

Object .assign ( scenario .setting, setting, { scenarist } );

if ( establish )
scenarist .establish ( signature );

cue ();

};
