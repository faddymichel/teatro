import { createInterface } from 'readline';

export default function scenario$yallah ( participant ) {

const teatro = this;
const cli = createInterface ( {

input: participant,
output: participant,
prompt: 'Say Yallah!'

} );

participant .on ( 'error', () => {

cli .removeAllListeners ();
cli .close ();

} );

cli .prompt ();
cli .on ( 'line', ( line ) => {

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

cli .prompt ();

} );

};
