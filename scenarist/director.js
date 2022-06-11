const director = {

construct: ( scenario, order ) => scenario ( scenario () .construct, ... order ),
defineProperty: ( scenario, direction, details ) => scenario ( scenario () .defineProperty, direction, details ),
deleteProperty: ( scenario, direction ) => scenario ( scenario () .deleteProperty, direction ),
get: ( scenario, direction ) => scenario ( scenario () .get, direction ),
getOwnPropertyDescriptor: ( scenario, direction ) => scenario ( scenario () .getOwnPropertyDescriptor, direction ),
getPrototypeOf: scenario => scenario ( scenario () .getPrototypeOf ),
has: ( scenario, direction ) => scenario ( scenario () .has, direction ),
isExtensible: scenario => scenario ( scenario () .isExtensible ),
ownKeys: scenario => scenario ( scenario () .ownKeys ),
preventExtensions: scenario => scenario ( scenario () .preventExtensions ),
set: ( scenario, direction, details ) => scenario ( scenario () .set, direction, details ),
setPrototypeOf: ( scenario, prologue ) => scenario ( scenario () .setPrototypeOf, prologue )

};

export default director;
