const descriptor = module .exports;

descriptor .enumerable = true;

descriptor .value = function close () {

const teatro = this;
const server = require ( './server' );

server .close ();

teatro .emit ( 'close' );

};
