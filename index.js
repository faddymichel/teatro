import { descriptor as scenario } from './scenario.js';
import { descriptor as write } from './write.js';
import { descriptor as play } from './play.js';
import { descriptor as establish } from './establish.js';
import { descriptor as prepare } from './prepare.js';
import { descriptor as setting } from './setting.js';

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
Object .defineProperty ( Scenarist .prototype, 'prepare', prepare );
Object .defineProperty ( Scenarist .prototype, 'setting', setting );
