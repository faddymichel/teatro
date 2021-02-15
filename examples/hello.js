import Scenarist from 'scenarist';

process .stdin .setEncoding ( 'utf8' );
process .stdout .setEncoding ( 'utf8' );

const scenario = Scenarist ();

scenario ( {

answering: false,
repeats: 0,
0: "Hello, there! I'm Scenarist!",
1: "Again? Okay. Hello, there!",
2: "This is boring. Hello!",
Infinity: "No!"

}, 'history', 'logic', 'dialogue', 'memory' );

scenario ( name => {

const repeats = scenario ( 'history', 'repeats' );

process .stdout .write ( `Me: ${

scenario ( 'logic', repeats )

}` );

scenario ( 'memory', 'repeats', repeats + ( repeats < 2 ? 1 : Infinity ) );

scenario ( 'name' );

}, 'hello', 'hi', 'salam' );

scenario ( () => {

process .stdout .write ( "Me: I'm here!" );

if ( scenario ( 'memory', 'answering' ) )
return;

process .stdout .write ( `
You: ` );

process .stdin .on ( 'data', line => {

scenario ( ... line .trim () .split ( ' ' ) );

process .stdout .write ( `
You: ` );

} );

scenario ( 'history', 'answering', true );

}, 'interact', 'answer', 'reply' );

scenario ( 'interact' );
