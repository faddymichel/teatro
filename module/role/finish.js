const $ = require ( './symbol' );

const descriptor = module .exports;

descriptor .value = function finish ( ... deliverables ) {

const role = this;
const socket = role [ $ .socket ];
const listen = role [ $ .listen ];

if ( listen )
socket .removeListener ( 'message', listen );

socket .send ( `#role #${ role .constructor .name .toLowerCase () } #finish` );
role .emit ( 'finish', deliverables );

};
