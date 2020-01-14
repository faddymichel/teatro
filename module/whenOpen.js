const $ = require ( './symbol' );
const { issue, retrieve, cancel } = require ( './ticket/symbol' );
const _host = require ( './host' );

const descriptor = module .exports;

descriptor .value = function whenOpen () {

const teatro = this;

teatro [ $ .server ] .on ( 'listening', () => {

const stamp = teatro [ $ .ticket ] [ issue ] ( _host ( {

Ticket: teatro [ $ .ticket ],
issue: issue,
cancel: cancel

} ) );
const host = teatro [ $ .ticket ] [ retrieve ] ( stamp );

teatro .emit ( 'host', stamp, host );

} );

};
