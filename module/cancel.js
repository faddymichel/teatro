export default ( book, venue ) => {

const descriptor = {};

descriptor .enumerable = true;
descriptor .value = function cancel ( stamp, signature ) {

if ( book [ stamp ] && venue [ book [ stamp ] .play ] .signature === signature )
return delete book [ stamp ];

return false;

};

return descriptor;

};
