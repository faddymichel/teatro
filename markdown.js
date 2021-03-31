const scene = $ => {

$ ( ( $, heading, ... content ) => {

process .stdout .write ( `${ heading === 'heading' ? '#': heading }  ` );
console .log ( ... content );

}, 'heading', '#', '##', '###', '####', '#####', '######' );

};

scene .scenaristable = true;
module .exports = scene;
