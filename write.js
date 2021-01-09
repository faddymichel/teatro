import Scenario from './scenario/index.js';

export const descriptor = {};

descriptor .value = function write ( signature, ... basis ) {

const scenarist = this;
const scenario = scenarist .read ( signature );

basis .forEach ( basisSignature => {

const basisScenario = scenarist .read ( basisSignature );

Object .assign ( scenario, basisScenario );

} );

};
