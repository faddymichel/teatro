import { descriptor as establish } from './establish.js';
import { descriptor as act } from './act.js';
import { descriptor as play } from './play.js';

const Scenario = function Scenario () {

const scenario = this;

Object .defineProperty ( scenario, 'script', {

enumerable: true,
value: {}

} );

Object .defineProperty ( scenario, 'setting', {

enumerable: true,
value: {}

} );

};

Object .defineProperty ( Scenario .prototype, 'establish', establish );
Object .defineProperty ( Scenario .prototype, 'act', act );
Object .defineProperty ( Scenario .prototype, 'play', play );

export default Scenario;
