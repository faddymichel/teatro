const ws = require ( 'ws' );

const descriptor = module .exports;

descriptor .value = function ( args ) {

const teatro = this;

Object .defineProperty ( teatro, 'server', {

value: new ws .Server ( args )

} );

[

'listening',
//'connection',
//'error',
//'close'

] .forEach ( ( event ) => {

teatro .server .on ( event, require ( './' + event ) );

} );

return teatro;

};
