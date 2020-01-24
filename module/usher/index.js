const $ = require ( '../role/symbol' );
const Role = require ( '../role' );
 
module .exports = function _Usher ( ... privileges ) {

const Usher = function Usher ( socket ) {

Role .call ( this, socket );

};

Usher .prototype = Object .create ( Role .prototype );

Object .defineProperty ( Usher .prototype, 'constructor', {

value: Usher,
enumerable: false,
writable: true

} );

Object .defineProperty ( Usher .prototype, $ .privileges, {

value: privileges,

} );

Object .defineProperty ( Usher .prototype, $ .prompt, {

value: '?ticket'

} );

Object .defineProperty ( Usher .prototype, $ .listener, require ( './listener' ) );

return Usher;
 
};
