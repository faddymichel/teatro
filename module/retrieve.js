export default ( book ) => {

const descriptor = {};

descriptor .enumerable = true;
descriptor .value = function retrieve ( stamp ) {

return book [ stamp ] || false;

};

return descriptor;

};
