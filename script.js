const script = {};

script .construct = function construct ( scene ) {

return new this .setting ( ... scene );

};

script .defineProperty = function defineProperty ( [ direction, details ] ) {

const story = this;

Object .defineProperty ( story .setting, direction, details );

return story .interface;

};

script .deleteProperty = function deleteProperty ( [ direction ] ) {

return delete this .setting [ direction ];

};

script .get = function get ( scene ) {

const story = this;
const { setting } = story;
const [ direction ] = scene;
let conflict = setting [ direction ];

switch ( typeof conflict ) {

case 'object':
case 'function':

const Story = Object .getPrototypeOf ( story ) .constructor;

conflict = story .book [ conflict ] = story .book [ conflict ] || new Story (

typeof conflict === 'function' ? conflict .bind ( setting ) : conflict,
story .$, story .appendix

);

scene .shift ();

if ( scene .location )
scene .location .push ( direction );

}

return conflict;

};

script .getOwnPropertyDescriptor = function getOwnPropertyDescriptor ( [ direction ] ) {

const story = this;
const settingDescriptor = Object .getOwnPropertyDescriptor ( story .setting, direction );
const scenarioDescriptor = Object .getOwnPropertyDescriptor ( story .scenario, direction );

Object .defineProperty ( this .scenario, direction, settingDescriptor );

return settingDescriptor;

};

script .getPrototypeOf = function getPrototypeOf () {

return Object .getPrototypeOf ( this .setting );

};

script .has = function has ( [ direction ] ) {

return Reflect .has ( this .setting, direction );

};

script .isExtensible = function isExtensible () {

return Object .isExtensible ( this .setting );

};

script .ownKeys = function ownKeys () {

return Reflect .ownKeys ( this .setting );

};

script .preventExtensions = function preventExtensions () {

const story = this;

Object .preventExtensions ( story .setting );
Object .preventExtensions ( story .scenario );

return story .interface;

};

script .set = function set ( scene ) {

const story = this;
const [ direction, details ] = scene;

story .setting [ direction ] = details;

return story .get ( scene );

};

script .setPrototypeOf = function setPrototypeOf ( [ prologue ] ) {

const story = this;

Object .setPrototypeOf ( story .setting, prologue );

return story .interface;

};

const plot = Symbol ();

script .play = async function play ( scene ) {

const story = this;

if ( scene [ 0 ] ?.plot === plot )
scene = scene [ 0 ];

scene .plot = scene .plot || plot;
scene .location = scene .location || [];

if ( typeof story .setting === 'function' ) {

scene .conflict = story .setting;
scene .resolution = scene .conflict ( ... scene );

}

else {

scene .conflict = story .get ( scene );
scene .resolution = typeof scene .conflict === 'function' ?
( await scene .conflict ( $ .play, scene ) ) .resolution :
scene .conflict;

}

delete scene .plot;

return scene;

};

export default script;
