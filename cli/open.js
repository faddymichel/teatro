module .exports = ( key ) => {

return function open () {

console .log ( '#teatro #kan-wakan-wakan #open' );

const teatro = this;
const venue = {};
const signature = Symbol ();
const interface = require ( 'readline' ) .createInterface ( {

input: process .stdin,
output: process .stdout,
prompt: '\n?order\n... '

} );

interface .on ( 'error', ( error ) => {

teatro .emit ( 'error', error );

} );
interface .prompt ();
interface .on ( 'line', ( argv ) => {

argv = argv
.trim ()
.split ( ' ' );

switch ( argv [ 0 ] ) {

case 'host':

if ( ! venue [ argv [ 1 ] ] )

try {

venue [ argv [ 1 ] ] = teatro .host ( require ( process .cwd () + '/' + argv [ 1 ] ), signature );

} catch ( error ) {

teatro .emit ( 'error', error );

}

if ( venue [ argv [ 1 ] ] )
console .log ( `#host #play #${ argv [ 1 ] } #true` );

break;

case 'end':

const end = teatro .end ( venue [ argv [ 1 ] ], signature );

if ( end )
delete venue [ argv [ 1 ] ];

console .log ( `#play #end #${ argv [ 1 ] } #${ end }` );

break;

case 'issue':

const stamp = teatro .issue ( venue [ argv [ 1 ] ] );

console .log ( `#ticket #issue #play ${ argv [ 1 ] } ${ stamp }` );

break;

case 'cancel':

console .log ( `#ticket #cancel #${ teatro .cancel ( argv [ 1 ], signature ) }` );

break;

case 'close':

interface .removeAllListeners ();
interface .close ();
teatro .close ( key );

return;

default:

console .log ( '#order', '#false' );

}

interface .prompt ();

} );

};

};
