import Scenario from './scenario/index.js';

export const descriptor = {};

descriptor .value = function start ( { signature, basis, setting, scenes, display } ) {

const scenarist = this;
const { book } = scenarist;
const scenario = Object .defineProperty ( book, signature, {

configurable: true,
enumerable: true,
value: scenarist .read ( signature ) || new Scenario ()

} ) [ signature ];

if ( basis instanceof Array )
scenarist .write ( signature, ... basis );

if ( display === true )
scenarist .scenario = signature;

if ( scenes instanceof Array )
for ( const scene of scenes )
scenario .establish ( scene );

if ( typeof setting === 'object' )
Object .assign ( scenario .setting, setting );

return scenario;

};
