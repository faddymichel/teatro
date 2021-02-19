export const create = function create ( node, type ) {

const oscilla = this;
const context = oscilla ( 'context' );

oscilla ( 'graph', node, context [ 'create' + type ] () );

};

export const connect = function connect ( source, destination, parameter ) {
const oscilla = this;

oscilla ( 'graph', source )
.connect (
parameter ? oscilla ( 'graph', destination ) [ parameter ] : oscilla ( 'graph', destination )
);

};

export const start = function start ( node ) {

const oscilla = this;

oscilla ( 'graph', node ) .start ();

};
