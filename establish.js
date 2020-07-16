export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function establish ( name ) {

const scenarist = this;
const scenario = scenarist .scenarios [ name ];

for ( const signature of scenario .signatures ) {

const { establishment } = scenario .scenes [ signature ];

if ( typeof establishment === 'function' )
establishment .call ( scenario .setting );

}

};
