const crypto = require ( 'crypto' );

module .exports = ( $ ) => {

const descriptor = {};

descriptor .value = function stamp () {

const book = this;

return crypto
.createHash ( 'sha256' )
.update ( ( book [ $ .random ] + book [ $ .index ]++ ) .toString () )
.digest ( 'hex' );

};

return descriptor;

};
