export const descriptor = {};

descriptor .value = function play ( event, action, ... details ) {

const scenario = this;
const signature = scenario .script [ event ];

if ( typeof signature !== 'symbol' )
throw new ReferenceError ( `Event: "${ event }" is not found.` );

const script = scenario .script [ signature ];

return script [ action ] .call ( scenario .setting, event, action, ... details );

};
