export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function play ( event ) {

const scenarist = this;
const scenario = scenarist .scenarios [ scenarist .display ];
const role = scenario .scenes [ typeof event .scene === 'number' ? event .scene : event .scene .split ( ':' ) [ 0 ] ];

if ( role ) {

const { action } = scenario .scenes [ role ];
action .call ( scenario .setting, event );

}

};
