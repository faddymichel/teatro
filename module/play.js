module .exports = ( venue ) => {

const descriptor = {};

descriptor .value = function play ( participant, ticket ) {

const teatro = this;

venue [ ticket .play ] .scenario .call ( teatro, participant );

};

return descriptor;

};
