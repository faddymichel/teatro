const { issue } = require ( '../ticket' );
const { spawn } = require ( 'child_process' );

const $host = module .exports = function $host ( socket ) {

const host = this;

socket .send ( '?command' );

socket .once ( 'message', ( data ) => {

const argv = data .split ( ' ' );

const subprocess = spawn ( argv [ 0 ], argv .slice [ 1 ] );

host .emit ( 'subprocess', subprocess );

if ( subprocess .pid ) {

const actor = host .play .issue ( host .play .actor ( socket, subprocess ) ) .stamp;
const audience = host .play .issue ( host .play .audience ( socket, subprocess ) ) .stamp;

socket .send ( '#ticket #actor ' + actor );
socket .send ( '#ticket #audience ' + audience );

host .emit ( 'play', subprocess );

} else {

socket .send ( '#false' );

}

host .emit ( 'end', socket );

} );

};

Object .defineProperty ( $host, 'issue', {

value: issue,
enumerable: true

} );

[

'actor',
'audience'

] .forEach ( ( property ) => {

Object .defineProperty ( $host, property, require ( './' + property ) );

} );
