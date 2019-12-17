const descriptor = module .exports;

descriptor .value = function seat () {

const teatro = this;

teatro .server .on ( 'connection', function checkId ( socket ) {

socket .send ( '?ticket' );

socket .once ( 'message', ( id ) => {

const ticket = teatro .Ticket ( id );

if ( ticket )
ticket .play ( socket );

else {

socket .send ( '#false' );

checkId ( socket );

}

} );

} );

};
