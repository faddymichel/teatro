module .exports = function __audience ( subprocess ) {

return function _audience ( socket ) {

const audience = this;

socket .send ( '#play #audience' );

const listen = function listen ( line ) {

socket .send ( line );

};

subprocess .stdout .on ( 'data', listen );
 
audience .on ( 'cancel', () => {

subprocess .stdout .removeListener ( 'data', listen );

} );

};

};
