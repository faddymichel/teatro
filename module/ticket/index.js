const ticket = module .exports;

[

'issue',
'check'

] .forEach ( ( property ) => {

Object .defineProperty ( ticket, property, require ( './' + property ) );

} );
