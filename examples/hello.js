import Scenarist from 'scenarist';

process .stdin .setEncoding ( 'utf8' );
process .stdout .setEncoding ( 'utf8' );

let scenario = Scenarist ( function () {

return {

answering: false,
repeats: 0,
0: "Hello, there! I'm Scenarist!",
1: "Again? Okay. Hello, there!",
2: "This is boring. Hello!",
Infinity: "No!"

};

} );

scenario ( () => {

scenario = scenario .establish ();

process .stdout .write ( "Okay, let's start over!" );

}, 'reset' );

scenario ( () => {

const repeats = scenario ( 'repeats' );

process .stdout .write ( `Me: ${

scenario ( repeats )

}` );

scenario ( 'repeats', repeats + ( repeats < 2 ? 1 : Infinity ) );

}, 'hello', 'hi', 'salam' );

scenario ( () => {

process .stdout .write ( "Me: I'm here!" );

if ( scenario ( 'answering' ) )
return;

process .stdout .write ( `
You: ` );

process .stdin .on ( 'data', line => {

scenario ( ... line .trim () .split ( ' ' ) );

process .stdout .write ( `
You: ` );

} );

scenario ( 'answering', true );

}, 'interact', 'answer', 'reply' );

scenario ( 'interact' );
