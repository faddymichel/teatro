const $ = require ( '../role/symbol' );
 const { spawn } = require ( 'child_process' );
const _Producer = require ( './producer' );
const Play = require ( './play' );

const descriptor = module .exports;

descriptor .value = function listener () {
 
const host = this;
const [ Ticket, issue, cancel ] = usher [ $ .privileges ];
 
return function listen ( argv ) {

const socket = this;

argv = argv
.trim ()
.split ( ' ' );

const play = new Play ( argv );
const signature = Symbol ();
const Producer = _Producer ( Play, Ticket, issue, cancel, signature );
const stamp = Ticket [ issue ] ( Producer, signature );

socket .send ( '#ticket #issue #producer ' + stamp );

} );

socket .send ( '#play #false' );
socket .send ( host [ $ .prompt ] );

};

};
