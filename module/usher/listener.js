const $ = require ( '../role/symbol' );

const descriptor = module .exports;

descriptor .value = function listener () {

const usher = this;
const [ Ticket, retrieve ] = usher [ $ .privileges ];

return function listen ( stamp ) {

const socket = this;

stamp = stamp
.trim ()
.toString ( 'hex' );

const ticket = Ticket [ retrieve ] ( stamp );

if ( ticket ) {

const role = new ticket .Role ( socket );
usher [ $ .finish ] ( role );

}

socket .send ( '#ticket #retrieve #false' );
socket .send ( usher [ $ .prompt ] );

};

};
