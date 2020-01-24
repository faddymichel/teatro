const $ = require ( '../role/symbol' );
const Role = require ( '../role' );

module .exports = function _Host ( ... privileges ) {

const Host = function Host ( socket ) {

Role .call ( this );

};

Host .prototype = Object .create ( Role .prototype );

Object .defineProperty ( Host .prototype, 'constructor', {

value: Host,
enumerable: false,
writable: true

} );

Object .defineProperty ( Host .prototype, $ .privileges, {

value: privileges,

} );

Object .defineProperty ( Host .prototype, $ .prompt, {

value: '?argv'

} );

Object .defineProperty ( Host .prototype, $ .listener, require ( './listener' ) );

return Host;

};
