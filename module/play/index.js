const descriptor = module .exports;

const play = descriptor .value = {};

[

'host',
'actor',
'audience'

] .forEach ( ( property ) => {

Object .defineProperty ( play, property, require ( './' + property ) );

} );
