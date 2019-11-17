window.onload = () => {

const article = document .createElement ( 'article' );

document .body .appendChild ( article );

const header = document .createElement ( 'header' );
article .appendChild ( header );

const h1 = document .createElement ( 'h1' );
h1 .textContent = 'psmd13 / pass';
header .appendChild ( h1 );

const section = document .createElement ( 'section' );
article .appendChild ( section );

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

const ws = new WebSocket ( 'ws://localhost:1313?pass=cat -' );

ws .onerror = ( event ) => {

console.log ( 'ws: error occured..', event );

};

ws .onmessage = ( event ) => {

console .log ( '#message', event .data );

const p = document .createElement ( 'p' );
p .textContent = event .data;
section .appendChild ( p );

};

ws .onopen = () => {

button .onclick = () => {

ws .send ( text .value + '\n' );

text .value = '';

};

};

};
