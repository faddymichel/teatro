export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function write ( selector, tag, attributes, content ) {

if ( typeof selector !== 'string' || typeof tag !== 'string' )
return this;

const parent = document .querySelector ( selector );

if ( !parent )
return this;

tag = tag .split ( ' ' );
let element;
switch ( tag .length ) {

case 1:

element = document .createElement ( tag );

break;
case 2:
element = document .createElementNS ( tag [ 0 ], tag [ 1 ] );

}

if ( typeof attributes === 'object' )
for ( const attribute in attributes )
attribute .startsWith ( 'on' ) ?
element [ attribute ] = attributes [ attribute ] :
element .setAttribute ( attribute, attributes [ attribute ] );

if ( typeof content === 'string' )
element .textContent = content;

parent .appendChild ( element );

return this;

};
