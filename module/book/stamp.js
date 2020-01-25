const crypto = require ( 'crypto' );

const descriptor = module .exports;

descriptor .value = function stamp () {

return crypto
.createHash ( 'sha256' )
.update ( ( book [ $ .random ] + book [ $ .index ]++ ) .toString () )
.digest ( 'hex' );

};
