export default function prompt ( play, question, ... answers ) {

const scenario = this;
const timestamp = Date .now ();
const prompt = document .createElement ( 'form' );

prompt .id = `prompt-${ timestamp }`;

prompt .innerHTML = `

<h2 id="${ prompt .id }-question">
${ question }
</h2>

<fieldset id="${ prompt .id }-answer">

${

answers .map ( ( { label, attributes }, index ) => `

<input
id="${ prompt .id }-answer-${ index }"
${

Object .keys ( attributes ) .map ( name => `

${ name }="${ attributes [ name ] }"

` )
.join ()

}
></input>

<label for="${ prompt .id }-answer-${ index }">
${ label }
</label>

` )
.join ()

}

</fieldset>

<button
id="${ prompt .id }-play"
type="submit"
>

Play Action:

<code id="${ prompt .id }-play-script">
${ play }
</code>

</button>

`;

document .body .appendChild ( prompt );

const playScript = document .getElementById ( `${ prompt .id }-play-script` );
const answer = document .getElementById ( `${ prompt .id }-answer` );

prompt .onsubmit = event => {

event .preventDefault ();

const line = playScript .textContent .trim () .split ( ' ' );

console .log ( line );
scenario ( ... line );

};

answer .oninput = e => {

const data = new FormData ( prompt );
playScript .textContent = `${ play }`;

for ( const value of data .values () )
playScript .textContent += ` ${ value }`;

};
/*
Array ( answer .elements .length ) .fill ( undefined ) .map ( ( x, index ) => answer .elements [ index ] .value )
.join ( ' ' )

}`;
*/
};
