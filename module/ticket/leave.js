const descriptor = module .exports;

descriptor .value = function leave ( ... socket, results ) {

const ticket = this;

if ( ticket .listen )
socket .removeListener ( 'message', ticket .listen );

socket .send ( `#ticket #${ ticket .constructor .name .toLowerCase () } #leave` );
ticket .emit ( 'leave', results );

};
