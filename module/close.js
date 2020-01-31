module .exports = ( server ) => {

const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function close () {

const teatro = this;

server .close ();

teatro .emit ( 'close' );

};

return descriptor;

};
