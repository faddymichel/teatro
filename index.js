import Scenario from './scenario.js';

export { Scenario };

export const scenarist = Scenario ();

scenarist ( bookmark => Scenario (), 'start', 's', '#start', '#s' );
scenarist ( () => console .log ( 'hello' ), 'hello' );
