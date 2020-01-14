const $ = require ( './symbol' );

const descriptor = module .exports;

descriptor .enumerable = true;

descriptor .value = function close () {

const teatro = this;

teatro [ $ .server ] .close ();

teatro .emit ( 'close' );

};
