# Scenarist Amir el-Inteqam
## A JavaScript Function for Creating Scenario-Based Web and NodeJS Apps
### In Memory of the Architect Michel Wadie Samaan

#### NOTE!
This is an Experimental Version and is not recommended, by all means,
to be used in Production Environments.

## Installation

```
npm i scenarist
```

## Syntax

```
import Scenarist from 'scenarist';

const scenario = Scenarist ();
```

## Description

### export default function Scenarist ()

This module exports the Scenarist function.
It can be accessed using:

```
import Scenarist from 'scenarist';
```

### return function scenario ()

The Scenarist function creates and returns a new scenario.

```
const scenario = Scenarist ();
```

### let sameScenario = scenario ( action, ... events )

Where `action` is a `'function'`, and each `event` of `events` is a `'string'`, `'symbol'` or `'number'`.

When calling `scenario ()` with this set of parameters,
the `action` function will be assigned to each `event` of `events` in the `scenario`.
The same `scenario` is returned.

```
scenario ( () => console .log ( `
I'm good. But, I'm a little bit bored as I still don't handle a lot of scenarios and events.
` ), 'how are you?', "what's up?", 'status' );
```

### let value = scenario ( event, ... details )

Where `event` is `'string'`, `'symbol'` or `'number'`, and each `detail` of `details` can be of any type.

When calling `scenario` with this set of parameters,
if there's an `action` function assigned to the passed `event`,
the `action` function is, then, called with each `detail` of `details` as an argument to the function,
and the value of the `this` keyword is set to the current `scenario`.
The returned `value` is whatever value the `action` function returns.

```
scenario ( 'how are you?' )
// or
// scenario [ "what's up?" ] ();
// or
// scenario .status ();

// Output: I'm good. But, I'm a little bit bored as I still don't handle a lot of scenarios and events.
```


### let value = scenario ( setting, value )


Where `setting` is a `'string'`, `'symbol'` or `'number'`, and `value` can be of any type.

When calling `scenario` with this set of parameters,
the passed `value` is assigned to the passed `setting`.
The `value` of the `setting` is returned.

```
scenario ( 'name', 'Scenarist Amir el-Inteqam' );
```

### let value = scenario ( setting )

Where `setting` is a `'string'`, `'symbol'` or `'number'`.

When calling scenario with this single parameter,
if a `value` is assigned to the passed `setting`,
the `value` is returned;
`undefined` is returned otherwise;

```
let name = scenario ( 'name' );
// or
// let name = scenario .name;
// returned value: 'Scenarist Amir el-Inteqam'
```

### let nestedScenario = scenario ( settings, ... events )

Where `settings` is an `'object'`, and each `event` of `events` is a `'string'`, `'symbol'` or `'number'`.

When calling `scenario` with this set of parameters,
a new `nestedScenario` will be assigned to each `event` of `events` of the current `scenario`,
with each `setting` of `settings` is assigned to the new `nestedScenario`.

```
scenario ( {

start: '6:00am',
end: '12:00pm'

}, 'morning', 'day' );

scenario ( 'morning', () => console .log ( `
Good morning! Is it between ${ scenario ( 'morning', 'start' ) } and ${ scenario .morning .end }?
`, 'greet' );

scenario ( 'day', 'greet' );
// Output: Good morning! Is it between 6:00am and 12:00pm?
```

Of course, a new `nestedNestedScenario` can, then, be nested inside the nested `nestedScenario`; and so forth.

```
scenario ( 'morning', {

start: '6:00am',
end: '8:00am'

}, 'early' );
```

## Examples

Refer to the `/examples` directory.
