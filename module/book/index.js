const Book = module .exports = function Book ( $ ) {

const book = this;

Object .defineProperty ( book, $ .entries, {

value: {}

} );

Object .defineProperty ( book, $ .index, {

value: 0

} );

Object .defineProperty ( book, $ .random, {

value: Math .random ()

} );

Object .keys ( $ .methods ) .forEach ( ( property ) => {

Object .defineProperty ( book, $ .methods [ property ], require ( './' + property ) ( $ ) );

} );

};
