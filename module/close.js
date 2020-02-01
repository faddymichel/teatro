module .exports = ( server, lock ) => {

const descriptor = {};

descriptor .enumerable = true;
descriptor .value = function close ( key ) {

const teatro = this;

if ( key !== lock ) {

teatro .emit ( 'error', new ReferenceError ( 'The lock could not be released by the provided key to close Teatro.' ) );

return false;

}

server .close ();

teatro .emit ( 'close' );

};

return descriptor;

};
