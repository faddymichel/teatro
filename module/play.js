module .exports = ( venue ) => {

const descriptor = {};

descriptor .value = function play ( participant, ticket ) {

const teatro = this;

venue [ ticket .play ] .script .call ( teatro, participant, ticket );

};

return descriptor;

};
