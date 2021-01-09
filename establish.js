export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function establish ( signature ) {

const scenarist = this;

const scenario = scenarist .book [ signature ];

if ( ! scenario )
throw new Error ();

for ( const establishment of scenario .establishments )
if ( typeof establishment === 'function' )
establishment .call ( scenario .setting );

};
