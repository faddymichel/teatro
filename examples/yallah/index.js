import Teatro from '../../index.js';
import scenario from './scenario.js';

const options = {};
options .ws = {

host: 'localhost',
port: 1313

};
const key = options .lock = Symbol ();

const teatro = new Teatro ( options );

teatro .on ( 'open', () => {

teatro .on ( 'participant', ( participant ) => {

participant .setEncoding ( 'utf8' );
participant .on ( 'data', ( stamp ) => {

console .log ( 'incoming stamp:', stamp );

stamp = stamp .trim ();

const ticket = teatro .retrieve ( stamp );

if ( ticket ) {

participant .removeAllListeners ();
teatro .play ( participant, ticket );

} else

participant .end ( 'Get out! Actually, you are out!' );

} );

participant .write ( 'Show me the Stamp of your Ticket. Or, get out of here!' );

} );

const signature = Symbol ();
const play = teatro .host ( scenario, signature );
const stamp = teatro .issue ( play );

console .log ( 'The Play "Yallah" is now hosted on Teatro.' );
console .log ( 'Here is the stamp for the issued ticket. They will not let you in without it; they are taking it serious for some reason.' );
console .log ( 'Stamp:', stamp );

} );
