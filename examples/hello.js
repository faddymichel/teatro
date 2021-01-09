import Scenarist from '../index.js';

const scenarist = new Scenarist ();
const scenario = scenarist .start ( {

signature: 'intro',
scenes: [ {

events: [ 'scenarist' ],
action: {

hello: () => console .log ( 'Hello, World! This is Scenarist!' )

}

} ]

} );

scenario .play ( 'scenarist', 'hello' );
