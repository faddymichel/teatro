const descriptor = module .exports;

descriptor .value = function whenError () {

const teatro = this;
const server = require ( './server' );

server .on ( 'error', ( error ) => {

teatro .emit ( 'error', error );

} );

teatro .on ( 'host', ( stamp, host ) => {

host .on ( 'subprocess', ( subprocess ) => {

subprocess .on ( 'error', ( error ) => {

teatro .emit ( 'error', error );

} );

} );

} ); 

teatro .on ( 'participant', ( ticket, socket ) => {

socket .on ( 'error', ( error ) => {

teatro .emit ( 'error', error, ticket, socket );

} );

} );

};
