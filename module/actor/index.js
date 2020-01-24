module .exports = function __actor ( subprocess ) {

return function _actor ( socket ) {

const actor = this;

socket .send ( '#play #actor' );

const act = function act ( line ) {

subprocess .stdin .write ( line );

};

const listen = function listen ( line ) {

socket .send ( line );

};

socket .on ( 'message', act );
subprocess .stdout .on ( 'data', listen );
subprocess .stderr .on ( 'data', listen );
  
actor .on ( 'cancel', () => {

socket .removeListener ( 'message', act );
subprocess .stdout .removeListener ( 'data', listen );
subprocess .stderr .removeListener ( 'data', listen );
 
} );

};

};
