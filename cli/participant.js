module .exports = function usher ( participant ) {

const teatro = this;
const interface = require ( 'readline' ) .createInterface ( {

input: participant,
output: participant,
prompt: '?ticket'

} );

participant .on ( 'error', () => {

interface .removeAllListeners ();
interface .close ();

} );

interface .prompt ();
interface .on ( 'line', ( stamp ) => {

stamp = stamp
.trim ();

const ticket = teatro .retrieve ( stamp );

if ( ticket ) {

interface .removeAllListeners ();
interface .close ();
teatro .play ( participant, ticket );

return;

}

participant .write ( '#ticket #false' );

} );

};
