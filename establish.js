export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function establish ( name ) {

const scenarist = this;
const scenario = scenarist .scenarios [ name ];

for ( const establishment of scenario .establishments )
if ( typeof establishment === 'function' )
establishment .call ( scenario .setting );

};
