const descriptor = module .exports;

descriptor .value = function host () {

const teatro = this;

teatro .server .on ( 'listening', () => {

const host = teatro .Ticket .issue ( teatro .play .host );

teatro .emit ( 'host', host );

} );

};
