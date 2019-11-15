const args = module .exports;

const domain = require ( './domain' );

process .argv .slice ( 2 ) .forEach ( ( argument ) => {

const [ option, value ] = argument .split ( '=' );

if ( domain .options .includes ( option ) )
args [ option ] = value;

} );
