module .exports = ( venue ) => {

const descriptor = {};

descriptor .value = function play ( participant, ticket ) {

const teatro = this;

venue [ ticket .play ] .on ( 'end', () => {

participant .end ( '#play #end' );

} );

venue [ ticket .play ] .scenario .call ( teatro, participant );

};

return descriptor;

};
