import script from './script.js';
import director from './director.js';

export default function Scenarist ( setting ) {

return new Story ( setting );

};

const Story = class Story {

constructor ( setting, $, appendix ) {

const story = this;

if ( $ ) {

story .$ = $;
story .appendix = appendix;

}

else {

$ = story .$ = {};
appendix = story .appendix = {};

for ( const direction of [

'setting',
'scenario',
'interface',
'play',
'resolve',
'construct',
'defineProperty',
'deleteProperty',
'get',
'getOwnPropertyDescriptor',
'getPrototypeOf',
'has',
'isExtensible',
'ownKeys',
'preventExtensions',
'set',
'setPrototypeOf'

] ) {

const signature = Symbol ( direction );

Object .defineProperty ( $, direction, {

value: signature,
enumerable: true

} );

Object .defineProperty ( appendix, signature, {

value: direction,
enumerable: true

} );

}

}

story .scenario = Object .defineProperty (

Story .Scenario .bind ( story ),
'name', { value: 'scenario', configurable: true }

);
story .setting = setting;
story .interface = new Proxy ( story .scenario, director );
story .book = {};

if ( ! Object .isExtensible ( setting ) )
Object .preventExtensions ( story .scenario );

return story .interface;

}

static Scenario ( ... scene ) {

const story = this;
const { setting } = story;
const [ direction ] = scene;

if ( Object .hasOwn ( Story .prototype, story .appendix [ direction ] ) )
return story [ story .appendix [ scene .shift () ] ] ( scene );

if ( typeof setting === 'function' )
return setting ( ... scene );

if ( ! scene .length )
return story .$;

const conflict = story .get ( scene );

return typeof conflict === 'function' ? conflict ( ... scene ) : conflict;

}

};

Object .assign ( Story .prototype, script );
