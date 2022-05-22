export default ( venue ) => {

const descriptor = {};

descriptor .enumerable = true;
descriptor .value = function end ( key, signature ) {

if ( venue [ key ] && venue [ key ] .signature === signature ) {

venue [ key ] .emit ( 'end' );

return delete venue [ key ];

}

return false;

};

return descriptor;

};
