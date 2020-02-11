module .exports = function scenario$yallah ( participant ) {

const teatro = this;
const interface = require ( 'readline' ) .createInterface ( {

input: participant,
output: participant,
prompt: 'Say Yallah!'

} );

participant .on ( 'error', () => {

interface .removeAllListeners ();
interface .close ();

} );

interface .prompt ();
interface .on ( 'line', ( line ) => {

line = line
.trim ()
.toLowerCase ();

switch ( line ) {

case 'yallah':

participant .write ( 'Salah Abdallah!' );

break;

default:

participant .write ( 'What is your problem?' );

}

interface .prompt ();

} );

};
