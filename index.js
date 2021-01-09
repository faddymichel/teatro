import { descriptor as start } from './start.js';
import { descriptor as write } from './write.js';
import { descriptor as read } from './read.js';
import { descriptor as scenario } from './scenario.js';

const Scenarist = function Scenarist () {

const scenarist = this;

Object .defineProperty ( scenarist, 'book', {

enumerable: true,
value: {}

} );

};

Object .defineProperty ( Scenarist .prototype, 'start', start );
Object .defineProperty ( Scenarist .prototype, 'write', write );
Object .defineProperty ( Scenarist .prototype, 'read', read );
Object .defineProperty ( Scenarist .prototype, 'scenario', scenario );

export default Scenarist;
