import Emitter from 'events';
import open from './open.js';

export default function Teatro ( options ) {

const teatro = this;

Emitter .call ( teatro );

Object .keys ( teatro ) .forEach ( ( property ) => {

const descriptor = Object .getOwnPropertyDescriptor ( teatro, property );
descriptor .enumerable = false;
Object .defineProperty ( teatro, property, descriptor );

} );

};

Teatro .prototype = Object .create ( Emitter .prototype );

Object .defineProperty ( Teatro .prototype, 'constructor', {

value: Teatro,
enumerable: false,
writable: true

} );

Object .defineProperty ( Teatro .prototype, 'open', open );
