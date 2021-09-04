const Scenarist = function Scenarist ( setting ) {

const prologue = Object .create ( setting );
const plot = Object .create ( prologue );
const $ = function scenario ( ... act ) {

const { setting, plot } = this .resolution;
const [ character, ... details ] = act;

if ( typeof setting [ character ] === 'object' )
return scenario .call ( {

resolution: {

setting: setting [ character ],
plot: plot [ character ] = Object .getPrototypeOf ( plot [ character ] ) !== setting [ character ] ? Object .create ( setting [ character ] ) : plot [ character ]

}

}, ... details );

if ( typeof character === 'function' )
return plot [ details [ 0 ] ] = new Play ( setting, character, details [ 0 ] );

let resolution = plot [ character ] instanceof Play ? plot [ character ] .dialogue : plot [ character ];

if ( typeof resolution === 'function' )
resolution = resolution .call ( setting, ... details );

if ( plot [ character ] instanceof Play )
plot [ character ] .action .call ( { $, resolution, character }, ... details );

return resolution;

} .bind ( {

resolution: { setting, plot }

} );

const Play = function Play ( setting, action, dialogue ) {

if ( typeof action !== 'function' )
throw TypeError ( `Play ( action, dialogue ): Type of 'action' must be 'function' instead of '${ typeof action }'.` );

Object .defineProperties ( this, {

dialogue: dialogue,
action: { value: action }

} );

};

return $;

};
