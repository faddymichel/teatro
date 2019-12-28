const { spawn } = require ( 'child_process' );

const descriptor = module .exports;

descriptor .enumerable = true;

descriptor .value = function host ( socket ) {

const ticket = this;

socket .send ( '?command' );

socket .once ( 'message', ( data ) => {

const argv = data .split ( ' ' );

const subprocess = spawn ( argv [ 0 ], argv .slice [ 1 ] );

if ( subprocess .pid ) {

const actor = ticket .ticket ( {

play: ticket .actor ( socket, subprocess )

} ) .stamp;

const audience = ticket .ticket ( {

play: ticket .audience ( socket, subprocess )

} ) .stamp;
 
socket .send ( '#ticket #actor ' + actor );
socket .send ( '#ticket #audience ' + audience );

} else {

socket .send ( '#false' );

}

ticket .emit ( 'play', subprocess );

ticket .play ( socket );

} );

};
