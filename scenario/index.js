import { descriptor as cast } from './cast.js';

export const Scenario = function Scenario () {

const scenario = this;

scenario .script = {};
scenario .setting = {};
Object .defineProperty ( scenario, 'establishments', {

value: []

} );

};

Object .defineProperty ( Scenario .prototype, 'cast', cast );
