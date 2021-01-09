import Scenario from './scenario/index.js';

export const descriptor = {};

descriptor .value = function read ( signature ) {

const { book } = this;

return book [ signature ] instanceof Scenario ? book [ signature ] : false;

};
