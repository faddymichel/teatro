const Scenarist = function Scenarist ( setting = {}, director ) {

const scenarist = this;

return scenarist .start ( setting, director );

} .bind ( ( () => {

const scenarist = function scenarist ( ... script ) {

const plot = this;
const scene = Object .create ( plot );
scene .conflict = scene .resolution = plot .resolution;

switch ( typeof scene .conflict ) {

case 'object':

if ( ! scene .conflict [ _ .setting ] ?.isPrototypeOf ( scene .conflict ) )
plot .resolution = scene .conflict = plot .conflict [ plot .event ] = scenarist .write ( scene .conflict, plot .resolution [ _ .prologue ] );

scene .setting = scene .conflict [ _ .setting ];
scene .event = script .splice ( 0, 1 ) [ 0 ];
scene .resolution = scene .conflict [ scene .event ];

break;

case 'function':

scene .resolution = scene .conflict .call ( plot .setting, ... script );

default:

return typeof scene .director === 'function' ?
scene .director ( scene ) :
scene .resolution;

}

return scenarist .call ( scene, ... script );

};

const _ = {

setting: Symbol (),
prologue: Symbol ()

};

scenarist .start = function start ( setting, director ) {

const play = {

director,
conflict: setting,
resolution: scenarist .write ( setting )

};

return play .scenarist = scenarist .bind ( play );

};

scenarist .write = function write ( setting, prologue = Object .create ( setting ) ) {

const scenario = Object .create ( prologue );

scenario [ _ .setting ] = setting;
scenario [ _ .prologue ] = prologue;

return scenario;

};

return scenarist;

} ) () );

export default Scenarist;
