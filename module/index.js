const Teatro = module .exports = function Teatro () {

const teatro = this;

const $ = {};
$ .server = Symbol ();
$ .Ticket = {};
$ .Ticket .book = Symbol ();
$ .Ticket .stamp = Symbol ();
$ .Ticket .issue = Symbol ();
$ .Ticket .retrieve = Symbol ();
$ .Ticket .cancel = Symbol ();

};
