const descriptor = module .exports;

descriptor .value = function whenOpen () {

const teatro = this;

teatro .server .on ( 'listening', () => {

const { stamp, ticket } = teatro .ticket ( {

play: teatro .play .host

} );

Object .defineProperty ( ticket, 'ticket', {

value: teatro .ticket

} );

Object .defineProperty ( ticket, 'actor', {

value: teatro .play .actor,
enumerable: true

} );

Object .defineProperty ( ticket, 'audience', {

value: teatro .play .audience

} );

teatro .emit ( 'host', stamp, ticket );

} );

};
