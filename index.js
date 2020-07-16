import { descriptor as scenario } from './scenario.js';
import { descriptor as write } from './write.js';
import { descriptor as play } from './play.js';
import { descriptor as establish } from './establish.js';

export const Scenarist = function Scenarist () {

const scenarist = this;

Object .defineProperty ( scenarist, 'scenarios', {

value: {}

} );

};

Object .defineProperty ( Scenarist .prototype, 'scenario', scenario );
Object .defineProperty ( Scenarist .prototype, 'write', write );
Object .defineProperty ( Scenarist .prototype, 'play', play );
Object .defineProperty ( Scenarist .prototype, 'establish', establish );
