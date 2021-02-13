import Scenarist from 'scenarist';

const scenario = Scenarist ();

scenario ( event => {

switch ( event ) {

case 'hello':

console .log ( "Hello, World! I'm Scenarist!" )

break;

case 'hi':

console .log ( "Hi, there! I'm Scenarist!" );

}

}, 'hello', 'hi' );

scenario ( 'hello' );

process .stdin .setEncoding ( 'utf8' );
process .stdin .on ( 'data', line => scenario ( line .trim () ) );
