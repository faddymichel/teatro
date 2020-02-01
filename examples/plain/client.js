window.onload = () => {

const article = document .createElement ( 'article' );

document .body .appendChild ( article );

const header = document .createElement ( 'header' );
article .appendChild ( header );

const h1 = document .createElement ( 'h1' );
h1 .textContent = 'teatro13 / teatro';
header .appendChild ( h1 );

const section = document .createElement ( 'section' );
article .appendChild ( section );

const append = function append ( content ) {

const p = document .createElement ( 'p' );
p .textContent = content;
section .appendChild ( p );
 
};

const footer = document .createElement ( 'footer' );
article .appendChild ( footer );

const text = document .createElement ( 'input' );
text .type = 'text';
text .placeholder = 'Input line'
footer .appendChild ( text );

const button = document .createElement ( 'input' );
button .type = 'button';
button .value = 'Enter';
footer .appendChild ( button );

const ws = new WebSocket ( 'ws://localhost:1313' );

ws .onerror = ( event ) => {

console.log ( 'ws: error occured..', event );

};

ws .onmessage = ( event ) => {

console .log ( '#message', event .data );

if ( event .data instanceof Blob ) {

const reader = new FileReader ();
 reader .onload = () => {

append ( reader .result );

};
reader .readAsText ( event .data );

} else {

append ( event .data );

}

};

ws .onopen = () => {

button .onclick = () => {

ws .send ( text .value + '\n' );

text .value = '';

};

};

};
