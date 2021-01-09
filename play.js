export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function play ( script ) {

const scenarist = this;
const scenario = scenarist .book [ scenarist .display ];
const role = scenario .script [ script .event ];

const { action } = role ? scenario .script [ role ] : {};

return new Promise ( ( cue, blooper ) => {

switch ( typeof action ) {

case 'function':

action .call ( scenario .setting, script, cue, blooper );

case 'object':

typeof action [ script .action ] === 'function' ? action [ script .action ] .call ( scenario .setting, script, cue, blooper ) : undefined;

break;

default:

blooper ( `#script #event #false
#event ${ script .event }
#action ${ script .action }
#details ${ JSON .stringify ( script .details ) }` );

}

} );

};
