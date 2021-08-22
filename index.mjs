const Scenarist = function Scenarist ( setting ) {

const prologue = Object .create ( setting );
const scenario = Object .create ( prologue );
const $ = function scenarist ( ... act ) {

const { setting, scenario } = this .resolution;
const [ scene, ... details ] = act;

if ( typeof setting [ scene ] === 'object' )
return scenarist .call ( {

resolution: {

setting: setting [ scene ],
scenario: scenario [ scene ] = Object .getPrototypeOf ( scenario [ scene ] ) !== setting [ scene ] ? Object .create ( setting [ scene ] ) : scenario [ scene ]

}

}, ... details );

if ( typeof scene === 'function' )
return scenario [ details [ 0 ] ] = new Play ( setting, scene, details [ 0 ] );

let resolution = scenario [ scene ] instanceof Play ? scenario [ scene ] .dialogue : scenario [ scene ];

if ( typeof resolution === 'function' )
resolution = resolution .call ( setting, ... details );

if ( scenario [ scene ] instanceof Play )
scenario [ scene ] .action .call ( { $, resolution, scene }, ... details );

return resolution;

} .bind ( {

resolution: { setting, scenario }

} );

const Play = function Play ( setting, action, scene ) {

Object .defineProperties ( this, {

dialogue: { get: () => setting [ scene ] },
action: { value: action }

} );

};

return $;

};

export default Scenarist;
