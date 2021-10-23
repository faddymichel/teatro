const Scenarist = function Scenarist ( ... details ) {

const scenarist = this;

return scenarist ( ... details );

} .bind ( ( () => {

const scenario = function scenario ( ... act ) {

const scene = typeof this === 'function' ? this () : this;
const { play } = scene;
let direction;

switch ( typeof scene .conflict ) {

case 'object':

[ direction, ... act ] = act;

scene .setting = scene .conflict;
scene .direction = direction; 
scene .conflict = typeof play .climax === 'function' ? play .climax ( scene, ... act ) : scene .setting [ direction ];

scene .location .push ( direction );

break;

case 'function':

scene .resolution = scene .conflict .call ( scene .scenaristable === true ? scene : scene .setting, ... act );

default:

scene .resolution = scene .resolution || scene .conflict;

return typeof play .reversal === 'function' ? play .reversal ( scene, ... act ) : scene .resolution;

}

return scenario .call ( scene, ... act );

};

return function scenarist ( conflict = {}, play ) {

const establishment = { play };

return establishment .scenario = scenario .bind ( () => Object .setPrototypeOf ( { conflict, location: [] }, establishment ) );

};

} ) () );

export default Scenarist;
