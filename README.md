# Teatro Kan WaKan WaKan
### In Memory of the Theatrical Artist Fouad El-Mohandes

This is an Experimental Version and is not recommended, by all means,
to be used in Production Environments!
## Description

Teatro is a WebSocket Server that creates Plays which can be accessed through Tickets.

### Constructor

```new Teatro ()```

### Prototype

#### Teatro .prototype .open ( options )

* `options <Object>` An options object that configures the created instance of Teatro while it is opening.
* `options .server <Object>` WebSocket Server options. Refer to [websockets/ws](https://github.com/websockets/ws)
* `options .lock <Symbol>` The lock which will be used by the `close` method.

The prototype's open method prepares the Teatro instance for hosting and ending Plays, issuing, cancelling and retrieving Tickets,
and playing a scenario for a Participant Websocket when passing a valid Ticket.

### Events

#### Event: 'open'

This event is emitted when the Teatro is open and ready.

#### Event: 'participant'

* `participant <DuplexStream>` A DuplexStream for reading and writing data from and to a connected WebSocket.

This event is emitted whenever a new WebSocket is connected to the instance of Teatro.

#### Event: 'close'

This event is emitted after closing the instance of Teatro.

#### Event: 'error'

* `error <Error>` The raised error.

This event is emitted whenever an error occurs to the instance of Teatro.

### Methods

#### teatro .host ( scenario, signature )

* `scenario <Function>` The scenario that represents the Play to be hosted.
* `<signature <Symbol>` A signature representing the owner hosting the Play.

##### Return value

* `key <Symbol>` The key to the Play.

This method hosts a Play on the instance of Teatro.

#### teatro .end ( key, signature )

* `key <Symbol>` The key to the Play that was returned by calling `teatro .host ()`.
* `signature <Symbol>` The signature of the owner of the hosted Play.

##### Return value

* `ended <boolean>` A boolean value representing whether the Play was ended successfully or not.

This method ends a hosted Play on the instance of Teatro.

#### teatro .issue ( key )

* `key <Symbol>` The key to the hosted Play.

##### Return value

* `stamp <string | boolean>` A unique string used later to retrieve and cancel the created ticket or false if failed to create the ticket.

This method issues a Ticket for a hosted Play on the instance of Teatro.

#### teatro .retrieve ( stamp )

* `stamp <string>` The stamp corresponding to the requested Ticket.

##### Return value

* `ticket <Ticket | boolean>` The requested ticket or false if failed to retrieve the ticket.

This method retrieves a Ticket to a hosted Play on the instance of Teatro.

#### teatro .cancel ( stamp, signature )

* `stamp <Symbol>` The stamp corresponding to the requested Ticket.
* `signature <Symbol>` The signature of the owner of the Play.

##### Return value

* `cancelled <boolean>` A boolean representing whether the Ticket was cancelled successfully or not.

This method cancels an issued Ticket for a Play hosted on the instance of Teatro.

#### teatro .play ( participant, ticket )

* `participant <DuplexStream>` The Participant WebSocket Stream.
* `ticket <Ticket>` The ticket to the hosted Play.

This method retrieves the Scenario function of the hosted Play found in the passed Ticket.
The Scenario function is, then, called with Participant WebSocket as its parameter and the scope of `this` is set to the instance of the Teatro Object.
## Author

Faddy Michel Samaan
`<faddy@teatro13.com>`
@faddymichel
