export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function play ( script ) {

const scenarist = this;
const scenario = scenarist .scenarios [ scenarist .display ];
const role = scenario .script [ script .event ];

const { action } = role ? scenario .script [ role ] : {};

return new Promise ( ( cue, blooper ) => {

if ( typeof action === 'function' )
action .call ( scenario .setting, script, cue, blooper );

else
blooper ( '#scenarist #action #invalid' );

} );

};
