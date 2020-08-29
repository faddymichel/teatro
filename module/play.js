module .exports = ( venue ) => {

const descriptor = {};

descriptor .value = function play ( participant, ticket, ... settings ) {

const teatro = this;

venue [ ticket .play ] .on ( 'end', () => {

participant .end ( '#play #end' );

} );

return new Promise ( ( ... directions ) => {

venue [ ticket .play ] .scenario .call ( teatro, participant, ... settings, ... directions );

} );

};

return descriptor;

};
