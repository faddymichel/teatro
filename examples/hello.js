import Scenarist from 'scenarist';

const Hello = Scenarist ();

Hello ( 'say', hello => hello ( 'out', 'write', hello ( 'greeting' ) ), 'greet' );
Hello ( 'out', process .stdin );

const hello1 = Hello ( hello => hello ( 'greeting', "Hello, there! I'm Scenarist Amir el-Inteqam!\n" ) );

hello1 ( 'say' );


const hello2 = Hello ( () => {} );

hello2 ( 'greeting', "Hey! This is Scenarist again! My greetings from the 2nd scenario!\n" );
hello2 ( 'greet' );
