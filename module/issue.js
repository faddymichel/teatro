const $ = require ( './symbol' );
const _Host = require ( './host' );

const descriptor = module .exports;

descriptor .enumerable = true;
descriptor .value = function issue ( signature ) {

const teatro = this;

const Host = _Host ( teatro [ $ .ticket ], retrieve )
const stamp = teatro [ $ .ticket ] [ issue ] ( Host, signature );

return stamp;
 
};
