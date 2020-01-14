const $ = require ( './symbol' );

const descriptor = module .exports;

const Ticket = descriptor .value = require ( './Ticket' );

Object .keys ( $ ) .forEach ( ( property ) => {

Object .defineProperty ( Ticket, $ [ property ], require ( './' + property ) );

} );
