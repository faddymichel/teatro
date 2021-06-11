# Scenarist Amir el-Inteqam

## Use Scenarist to Wrap a JavaScript Object inside a Scenario Function; the Object Would Turn into Subject!

### In Memory of The Architect Michel Wadie Samaan

### Dedicated to Blind Kids, Hoping for Them to Find Better Technology Scenarios in Their Future

## Why Scenarist?

### JavaScript Is Not Only Object-Oriented but Functional as Well

During the life-time of the JavaScript programming language,
there has been a great focus on the Object-Oriented nature of the language.
Most of the code found on the Web written in JavaScript is organized into objects
(that includes apps, APIs, libraries, modules, etc.).
Objects wait for actions to be performed on them.
Subjects, on the other hand, perform actions.
If there is a way to turn an object into subject,
the massive amount of objects that we currently have,
and of course the ones that will come in the future,
can act and interact together.

### Scenarist Emphasizes The Functional and Dynamic Nature of The JavaScript Programming Language through Scenarios

The `Scenarist` function takes an object-like `setting` and wraps it inside a `scenario` function.
This `scenario` function, based on the details (parameters) passed to it,
can perform various types of actions:

1. Act on itself by manipulating the properties of the wrapped `setting` object.

1. Interact with others by calling functions defined on the `setting` object.

1. Act on others since any object defined on the `setting` object is also turned into a nested `scenario` function.
This means that from a higher `scenario` function, the `setting` object of a nested `scenario` function can be manipulated.

## Examine Scenarist



```
// Assuming that Scenarist is loaded or imported successfully:

const $ = Scenarist ( {} );
// $ is the scenario function, returned by Scenarist, wrapped around the setting which is an empty object here.

$ ( 'x', 1, 'a', '1st' );
// A new property 'x' is defined on the setting object using the '=' assignment operator; setting the value to 1.
// This is similar to: setting .x = 1;
// The 'a' and '1st' are also defined on the setting object.
// But, they are defined using the Object .defineProperty () method with an accessor descriptor;
// where these properties are not enumerable but configurable and the getter/setter functions refer to the value of 'x'.
// So, they simply act as aliases or doubles to the 'x' property.
// This is similar to: Object .defineProperty ( setting, 'a', { configurable: true, get: () => setting .x, set: value => setting .x = value } );

$ ()
// return the setting: { x: 1 }

$ ( 'x' );
// return 1

$ ( 'a', 2 );
// set property 'x' to 1. (It will return the value of 'x' which is 1)

$ ()
// return the setting: { x: 2 }

$ ( 'array', [], 'stack' );
// A new property named 'array' is defined with the value set to new Array.
// Since Array is of type 'object', the scenario function ($) will call Scenarist to wrap the array inside a nested scenario function.
// Again, 'stack' is just an alias or double for the 'array' property; you can add as much doubles as you wish.

$ ( 'array', 'push', 1 );
// 'array' here refer to the scenario function wrapped around the array.
// So, here the nested scenario will call the Array .prototype .push function of the wrapped array, adding 1 to the empty array.
// similar to: setting .array .push ( 1 );

$ ( 'stack' );
// 'stack' is double for 'array', so it will return: [ 1 ]

$ ( 'array', 'length' );
// return: 1.
// similar to: setting .array .length
```

## Get Scenarist

Scenarist is a single-file JavaScript module containing around 100 lines of code.
It comes in 3 versions:

1. `scenarist.mjs` (ECMAScript Module)
2. `scenarist.js` (CommonJS Module)
3. `scenarist-script.js` (Script file to be loaded using `<script>` tag in HTML)

### Using NPM

```
npm i @faddymichel/scenarist
```

### Or, Just Clone The Repo

```
git clone https://github.com/faddymichel/scenarist.git
```

## Use Scenarist

### NodeJS ES Modules

```
import Scenarist from '@faddymichel/scenarist';
```

### NodeJS CommonJS Modules:

```
const Scenarist = require ( '@faddymichel/scenarist' );
```

### In Web, just load the 'scenarist-script.js'. Or, if using ES Modules:

```
import Scenarist from '<replace this with path to>/scenarist.mjs';
```

## Wrap a Setting (Object or Function) Inside a Scenario

### `let scenario = Scenarist ( setting );`

When the `Scenarist` function is called, it wraps the passed `setting` inside a `scenario`.
The `setting` must be either an object or a function.
If no setting is passed, an empty object will be passed instead.

```
const emptyObjectScenario = Scenarist ();
// Similar to: const emptyObjectScenario = Scenarist ( {} );

const objectScenario = Scenarist ( {

x: 1,
y: 2,
z: 3

} );

const functionScenario = Scenarist ( function Example ( x = 1, y = 2, z = 3 ) {

return { x, y, z };

} );

const classScenario = Scenarist ( class Example {

constructor ( x = 1, y = 2, z = 3 ) {

return { x, y, z };

}

} );

// Of course, you can use Scenarist to wrap existing objects, functions and/or classes.

const consoleScenario = Scenarist ( console );
const EventTargetScenario = Scenarist ( EventTarget );
const $ = Scenarist ( { window, document, console } );
```

## Now, Play The Scenario

### Get The `setting`

#### `const setting = scenario ();`

When the `scenario` function is called without passing arguments,
the `setting` is returned.

### Write Scenes to The `setting` (Define New Properties)

#### `const sameScenario = scenario ( descriptor, ... actors );`

When passing an object as the 1st parameter to the `scenario` function,
the `scenario` function expects that this object is a property descriptor
([read more about descriptors in the MDN JavaScript documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)).
For the 1st `actor` of `actors`,
the scene described by the `descriptor` will be written to the `setting` object.
For each `double` of the remaining '`actors`,
a new scene will be written for that `double` on the `setting` object,
with an accessor descriptor that is not enumerable but configurable refering to the `actor` scene
(the `get` function returns the scene written for `actor`,
and the `set` function writes the scene for the `actor).

```
const
