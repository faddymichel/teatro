module .exports = ( $ ) => {

const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function close () {

const teatro = this;

teatro [ $ .server ] .close ();

teatro .emit ( 'close' );

};

return descriptor;

};
