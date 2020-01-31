module .exports = ( venue ) => {

const descriptor = {};

descriptor .enumerable = true;
descriptor .value = function end ( key, signature ) {

if ( venue [ key ] && venue [ key ] .signature === signature )
return delete venue [ key ];

return false;

};

return descriptor;

};
