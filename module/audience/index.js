const $ = require ( '../role/symbol' );
const Role = require ( '../role' );
 
module .exports = function _Audience ( ... privileges ) {

const Audience = function Audience ( socket ) {

Role .call ( this, socket );

};

Audience .prototype = Object .create ( Role .prototype );

Object .defineProperty ( Audience .prototype, 'constructor', {

value: Audience,
enumerable: false,
writable: true

} );

Object .defineProperty ( Audience .prototype, $ .privileges, {

value: privileges,

} );

Object .defineProperty ( Audience .prototype, $ .teller, require ( './teller' ) );

return Audience;
 
};
