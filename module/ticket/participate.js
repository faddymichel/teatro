const descriptor = module .exports;

descriptor .enumerable = true;
descriptor .value = function participate ( socket ) {

const ticket = this;

socket .send ( `#ticket #${ ticket .constructor .name .toLowerCase () } #participate` );

if ( ticket .prompt )
socket .send ( ticket .prompt );

if ( ticket .listener ) {

Object .defineProperty ( ticket, 'listen', {

value: ticket .listener ()

} );

socket .on ( 'message', ticket .listen );

}

};
