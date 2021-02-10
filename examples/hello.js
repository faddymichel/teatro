import { Scenario } from 'scenarist';

const scenario = Scenario ();

scenario (
() => console .log ( "Hello, World! I'm Scenarist!" ),
'#hello', '#h'
);

process .stdin .on ( 'data', line => scenario ( '#hello' ) );
