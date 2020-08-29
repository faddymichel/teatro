export const descriptor = {};

descriptor .enumerable = true;

descriptor .get = function get () {

const scenarist = this;

return scenarist .scenarios [ scenarist .display ] .setting;

};

descriptor .set = function set ( setting ) {

if ( typeof setting !== 'object' )
throw new TypeError ( `'setting' must be of type 'object'` );

const scenarist = this;
const scenario = scenarist .scenarios [ scenarist .display ];

Object .assign ( scenario .setting, setting );

};
