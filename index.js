const Scenarist = function Scenarist ( establishment ) {

return this ( establishment );

} .bind ( ( () => {

const scenario = async function scenario ( ... order ) {

const scene = typeof this === 'function' ? this ( ... order ) : this;

switch ( typeof scene .conflict ) {

case 'undefined':

return;

case 'object':

const direction = scene .order .shift ();

scene .conflict = scene .conflict [ direction ];

scene .location .push ( direction );

break;

default:

scene .resolution = typeof scene .conflict === 'function' ? scene .conflict .call ( scene .setting, ... scene .order ) : scene .conflict;

delete scene .conflict;

/*
alert (

JSON .stringify ( scene )

);
*/

return scene;

}

return scenario .call ( scene );

};

const scenarist = function scenarist ( establishment ) {

const bound = scenario .bind (

( ... order ) => {

const scene = Object .defineProperties ( {}, {

location: {

enumerable: true,
value: []

},
scenario: {

enumerable: true,
get: () => bound

}

} );

if ( typeof establishment === 'function' )
establishment (

Object .defineProperty ( scene, 'order', {

enumerable: true,
value: order

} )

);

return scene;

} );

return Object .defineProperty ( bound, 'name', { name: 'Scenarist' } );

};

return scenarist;

} ) () );

module .exports = Scenarist;
