const { issue } = require ( './ticket' );
const receptionist = require ( './receptionist' );

const descriptor = module .exports;

descriptor .value = function whenParticipant () {

const teatro = this;
const server = require ( './server' );
const { ticket } = issue ( receptionist );

server .on ( 'connection', ( socket ) => {

ticket .play ( socket );

} );

teatro .on ( 'host', ( stamp, host ) => {

host .on ( 'end', ( socket ) => {

ticket .play ( socket );

} );
 
} );

};
