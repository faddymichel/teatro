const descriptor = module .exports;

descriptor .value = function ( socket ) {

const teatro = this;

socket .on ( 'message', ( id ) => {

const ticket = Ticket .check ( id );

if ( ticket )
ticket .play ();

else
teatro .enter ( socket );

} );

};
