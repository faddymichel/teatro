const Scenarist = require ( './' );
const { createInterface } = require ( 'readline' );

class Example {

constructor () {

this .history = [];
this .scenario = Scenarist ( {} );
this .action = [];

this .ask ();

}

static bot = createInterface ( {

input: process .stdin,
output: process .stdout

} );

ask () {

const example = this;
const bot = Example .bot;
const { ask, history, scenario, action } = example;
let query = '';

if ( action .length === 0 )
query += `
New Action:
`;

query += `
... Detail #${ action .length }:
`;

bot .question ( query, detail => {

detail = JSON .parse ( detail );

if ( detail === '' && action .length > 0 ) {

console .log ( `# Output:
${

JSON .stringify (
scenario ( ... action )
)

}` );

history .push ( action );

this .action = [];

}

else
action .push ( detail );

example .ask ();

} );

}

}

Scenarist ( Example ) ( Scenarist .branch );
