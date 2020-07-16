import { descriptor as scene } from './scene.js';

export const Scenario = function Scenario () {

const scenario = this;

Object .defineProperty ( scenario, 'scenes', {

value: {}

} );
Object .defineProperty ( scenario, 'setting', {

value: {}

} );
Object .defineProperty ( scenario, 'signatures', {

value: []

} );

};

Object .defineProperty ( Scenario .prototype, 'scene', scene );
