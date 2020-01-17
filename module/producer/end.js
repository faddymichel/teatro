module .exports = function __end ( play ) {

const { subprocess } = play;

return function _end ( socket, argv ) {

subprocess .kill ();

play .emit ( 'end' );

return false;

};

};
