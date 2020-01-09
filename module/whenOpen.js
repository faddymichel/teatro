const { issue } = require ( './ticket' );
const host = require ( './host' );

const descriptor = module .exports;

descriptor .value = function whenOpen () {

const teatro = this;
const server = require ( './server' );

server .on ( 'listening', () => {

const $host = issue ( host );

teatro .emit ( 'host', $host .stamp, $host .ticket );

} );

};
