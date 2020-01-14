const $ = require ( './symbol' );
const $ticket = require ( './ticket/symbol' );
const _host = require ( './host' );

const descriptor = module .exports;

descriptor .value = function whenOpen () {

const teatro = this;

teatro [ $ .server ] .on ( 'listening', () => {

const stamp = teatro [ $ .ticket ] [ $ticket .issue ] ( _host );
const host = teatro [ $ .ticket ] [ $ticket .retrieve ] ( stamp );

teatro .emit ( 'host', stamp, host );

} );

};
