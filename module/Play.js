import Emitter from 'events';

export default function Play ( scenario, signature ) {

const play = this;

Emitter .call ( play );

Object .keys ( play ) .forEach ( ( property ) => {

const descriptor = Object .getOwnPropertyDescriptor ( play, property );
descriptor .enumerable = false;
Object .defineProperty ( play, property, descriptor );

} );

Object .defineProperty ( play, 'scenario', {

value: scenario

} );

Object .defineProperty ( play, 'signature', {

value: signature

} );

};

Play .prototype = Object .create ( Emitter .prototype );

Object .defineProperty ( Play .prototype, 'constructor', {

value: Play,
writable: true,
enumerable: false

} );
