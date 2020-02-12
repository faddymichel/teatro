# Teatro Kan WaKan WaKan
### In Memory of the Theatrical Artist Fouad El-Mohandes

This is an Experimental Version and is not recommended, by all means,
to be used in Production Environments!
## Description

It all starts from the Playwriter; who must have programming skills along with creativity.
The Playwriter writes different Scenarios of a Play to be hosted on Teatro so that each Scenario focuses on a specific type of Participants.
A Scenario is a JavaScript function running on the NodeJS runtime with a Participant and a Ticket passed as parameters.
After writing and hosting Scenarios, Tickets can be issued for a Scenario where Ticket is the Accessibility method for a Participant to participate in a Play.
Participants
(Clients which can be a Web Browser such as Chrome and Firefox, Mobile App running on iOS or Android, etc)
connect to Teatro (Server) through the WebSocket protocol of communication
(Read about WebSocket on [Wikipedia](https://en.wikipedia.org/wiki/WebSocket)).
Since WebSocket opens a separate channel between the Server and each Client, making it possible for both sides to send/receive data to/from the other side at any time,
a live experience can be built step-by-step between the Participant and the playing Scenario.
This way, at each step, the Participant can translate the received data in a format
(audible, graphical, etc.)
that suits their physical capabilities and the situation they are facing.
This provides a smoother User-Experience than the Apps of nowadays since they depend on loading a lot of User-Interface components all together at once,
providing a crowded User-Experience,
which makes it hard to translate all of these components into different formats in a smooth way
(Apps made by Google, Microsoft, Apple, Facebook, Amazon, LinkedIn and all of their Blind followers are obvious examples of such a crowded and poor User-Experience).
In the end, Teatro aims to move a step forward towards Equality in Usability that is believed to start from the backend before the frontend.
## Installation

```
npm install @teatro13/teatro
```
## API Reference

### module .exports

This module exports the Teatro class.
It can be accessed using:

```
const Teatro = require ( '@teatro13/teatro' );
```

### Constructor

#### new Teatro ()

This constructor creates a new instance of Teatro.

### Prototype

#### Teatro .prototype .open ( options )

* `options <Object>` An options object that configures the created instance of Teatro while it is opening.
* `options .ws <Object>` WebSocket Server options. Refer to [websockets/ws](https://github.com/websockets/ws)
* `options .lock <Symbol>` The lock which will be used by the `close` method.

This method prepares the Teatro instance for hosting and ending Plays, issuing, cancelling and retrieving Tickets,
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

* `playKey <Symbol>` The key to the Play.

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
## Example

1. Clone the Git repository of Teatro:
	```
	git clone https://github.com/teatro13/teatro.git
	```
1. Change directory to the `yallah` example found in the `examples` directory:
	```
	cd <PATH_TO_TEATRO_REPO>/examples/yallah
	```
1. Install the `yallah` example using npm:
	```
	npm install
	```
1. Run the Yallah Example:
	```
	node ./
	```
1. Open the HTML file found in `examples/plain/client.html` with a compatible browser.
1. Play!
## Author

### Faddy Michel Samaan

* Email: `<faddy@teatro13.com>`
* GitHub: [@faddymichel](https://github.com/faddymichel)
* Twitter: [@faddymichel](https://twitter.com/faddymichel)
* LinkedIn: [@faddymichel](https://www.linkedin.com/in/faddymichel/)
