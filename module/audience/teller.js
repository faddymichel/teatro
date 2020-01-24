const $ = require ( '../role/symbol' );

const descriptor = module .exports;

descriptor .value = function teller () {

const audience = this;
const socket = audience [ $ .socket ];

return function tell ( line ) {

socket .send ( line );

};

};
