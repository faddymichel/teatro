const $ = require ( './symbol' );

const descriptor = module .exports;

descriptor .value = function start () {

const role = this;

const socket = role [ $ .socket ];

socket .send ( `#role #${ role .constructor .name .toLowerCase () } #start` );

if ( role [ $ .prompt ] )
socket .send ( role [ $ .prompt ] ); 

if ( role [ $ .listener ] () ) {

Object .defineProperty ( role, $ .listen, {

value: role [ $ .listener ] ()

} );

socket .on ( 'message', role [ $ .listen ] );

}

};
