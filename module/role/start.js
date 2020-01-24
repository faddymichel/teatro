const $ = require ( './symbol' );

const descriptor = module .exports;

descriptor .value = function start () {

const role = this;

const socket = role [ $ .socket ];
const listen = role [ $ .listener ] ();

socket .send ( `#role #${ role .constructor .name .toLowerCase () } #start` );
socket .send ( role [ $ .prompt ] ); 

if ( listen )
socket .on ( 'message', listen );

};
