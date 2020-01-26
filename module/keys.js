const descriptor = module .exports;

descriptor .enumerable = true;
descriptor .value = function keys () {

const $ = {};

$ .server = Symbol ();

$ .book = Symbol ();

$ [ $ .book ] = {};

$ [ $ .book ] .entries = Symbol ();
$ [ $ .book ] .index = Symbol ();
$ [ $ .book ] .random = Symbol ();

$ [ $ .book ] .methods = {};

$ [ $ .book ] .methods .stamp = Symbol ();
$ [ $ .book ] .methods .issue = Symbol ();
$ [ $ .book ] .methods .retrieve = Symbol ();
$ [ $ .book ] .methods .cancel = Symbol ();

$ .close = {};

$ .close .server = $ .server;

$ .issue = {};

$ .issue .book = $ .book;
$ .issue .issue = $ [ $ .book ] .methods .issue;

return $;

};
