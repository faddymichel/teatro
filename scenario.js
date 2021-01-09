export const descriptor = {};

descriptor .get = function get () {

const scenarist = this;

return scenarist .read ( scenarist .display );

};

descriptor .set = function set ( signature ) {

Object .defineProperty ( scenarist, 'display', {

configurable: true,
enumerable: true,
value: scenarist .read ( signature ) ? signature : scenarist .display

} );

};
