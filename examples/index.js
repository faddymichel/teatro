import Scenarist from './node_modules/scenarist/index.js';

window .onload = () => {

const todo = Scenarist ();

todo ( {}, 'document' );

const list = todo ( 'document', 'list', document .createElement ( 'ul' ) );

todo ( {

tasks: 0

}, 'memory' );

document .body .appendChild ( list );

todo ( input => {

const task = document .createElement ( 'li' );
const number = todo ( 'memory', 'tasks' ) + 1;

task .innerHTML = `

<label>
<h3>
#TASK-${ number }
</h3>

<input
type="text"
value="${ input }" />

`;

list .appendChild ( task );
todo ( 'memory', 'tasks', number );

}, 'add' );

todo ( id => {



}, 'edit' );

todo ( id => {



}, 'delete' );

todo ( filter => {



}, 'list', 'filter' );

todo ( 'add', 'yallah' );
todo ( 'add', 'salah abdallah' );

};
