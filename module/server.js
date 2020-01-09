const options = require ( './options' );
const { Server } = require ( 'ws' );

module .exports = new Server ( options .server );
