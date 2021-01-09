export const descriptor = {};

descriptor .value = function establish ( { events, action } ) {

const scenario = this;
const signature = Symbol ();
const script = scenario .script [ signature ] = {};

scenario .act ( signature, ... events );

if ( typeof action === 'object' )
Object .assign ( script, action );

return signature;

};
