const $ = require ( './symbol' );

module .exports = function __producer ( play ) {

const _producer = function _producer ( socket ) {

const producer = this;
const execute = function execute ( argv ) {

let finish = true;

argv = argv
.trim ()
.split ( ' ' );

if ( $ [ argv [ 0 ] ] )
finish = producer .participate [ $ [ argv [ 0 ] ] ] ( socket, argv );

else
socket .send ( '#order #false' );

if ( finish )
socket .send ( '?order' );

};

socket .send ( '#participant #producer' );
socket .send ( '?order' );

socket .on ( 'message', execute );

producer .once ( 'cancel', () => {

socket .removeListener ( 'message', execute );

} );

};

Object .defineProperty ( _producer, $ .play, {

value: play

} );

Object .keys ( $ ) .forEach ( ( property ) => {

if ( property !== 'play' )
Object .defineProperty ( _producer, $ [ property ], require ( './' + property ) );

} );

return _producer;

};
