const symbol = require ( './symbol' );

const descriptor = module .exports;

const Ticket = descriptor .value = require ( './Ticket' );

Object .keys ( symbol ) .forEach ( ( property ) => {

Object .defineProperty ( Ticket, symbol [ property ], require ( './' + property ) );

} );
