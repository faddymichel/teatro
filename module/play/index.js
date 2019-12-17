const descriptor = module .exports;

const play = descriptor .value = function play ( role ) {

return book [ role ] ? book [ role ] : false;

};

[

'host',
'actor',
'audience'

] .forEach ( ( property ) => {

Object .defineProperty ( play, property, require ( './' + property ) );

} );
