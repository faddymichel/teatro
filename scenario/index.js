import { descriptor as cast } from './cast.js';

export const Scenario = function Scenario () {

const scenario = this;

Object .defineProperty ( scenario, 'script', {

value: {}

} );
Object .defineProperty ( scenario, 'setting', {

value: {}

} );
Object .defineProperty ( scenario, 'establishments', {

value: []

} );

};

Object .defineProperty ( Scenario .prototype, 'cast', cast );
