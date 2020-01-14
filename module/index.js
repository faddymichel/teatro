const $ = require ( './symbol' );

const Teatro = module .exports = require ( './Teatro' );

Object .defineProperty ( Teatro .prototype, $ .ticket, require ( './ticket' ) );

[

'close',
'whenOpen',
'whenParticipant',
'whenError'

] .forEach ( ( property ) => {

Object .defineProperty ( Teatro .prototype, property, require ( './' + property ) );

} );
