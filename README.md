# Teatro Kan WaKan WaKan
### In Memory of the Theatrical Artist Fouad El-Mohandes

This is an Experimental Version and is not recommended, by all means,
to be used in Production Environments!
## Name

Teatro - Play the Shell through WebSocket Tickets
## Synopsis

```
teatro [ --host=<HOST> | -H <HOST> ] [ --port=<PORT> | -P <PORT> ]
```
## Description

Teatro is a WebSocket Server where Shell Child-Processes can be created and accessed through Tickets.


When running `teatro` shell command,
a WebSocket Server is created and starts listening on the specified host and port waiting for a WebSocket Client to connect;
`localhost:1313` is the default value and can be changed using `--host | -H` and `--port | -P`.
Teatro, then, prints `#ticket #issue #host <STAMP>` to the Standard Output;
where `<STAMP>` is the value used by a WebSocket Client to play the Host Ticket.

### On Client-Side, It All Begins by Being Ushered In

When a Client connects to Teatro,
Teatro sends `#play #usher` to the Client informing it that the Usher Ticket is playing.
The Usher sends `?ticket` asking the Client for a `<STAMP>` value.
Depending on the received value,
the Usher retrieves the requested Ticket and plays it;
or responds with `#false` if the Ticket was not found.

At first, only the `<STAMP>` for the Host Ticket is available in Teatro.
Supposing that the Client has this `<STAMP>` on hand, somehow, and provides it to the Usher,
The Host will play and Usher leaves for now.

### Time to Host Child-Processes; Or Shall It Be Called Plays?

Since it is the Host playing now, `#play #host` is sent to the Client.
The Host, then, sends `?command`.
When the Client responds with a command,
the Host attempts to start a new Child-Process/Play in which the command would start running.
If the Play starts successfully,
the Host issues a Producer Ticket and responds to the Client with `#ticket #issue #producer <STAMP>`.
Or, responds with `#false` otherwise.
Finally, the Host leaves and the Usher is back to play.

In case of success,
the Client would probably provide the Usher with the newly given `<STAMP>` so that the Producer Ticket plays.

### Put Everything in Order before Playing

Similar to prior tickets,
`#play #producer` is sent;
informing the Client that the Producer is playing.
The Producer asks the Client for an order to execute by sending `?order`.
The client may write one of the following orders:

* ``` issue <ROLE> ```
This will issue a new Ticket for the specified `<ROLE>`;
where `producer`, `actor` and `audience` are the allowed values of `<ROLE>`.

* ``` cancel <STAMP> ```
This will cancel the Ticket related to the specified `<STAMP>`,
only if, the `<STAMP>` is related to an existing Ticket and the Ticket was issued for the Play the Producer is responsible for.
Note, if all Producer Tickets issued for a play are cancelled, the play will end immediately.

* ``` end ```
This will end the play and cancel all of its Tickets.

Provided that the Play is running and its various Tickets can be issued and cancelled by the Producer,
nothing is left except accessing the Play through Actor and Audience Tickets.

### Now, Play! Or, Just Sit and Watch!

`#play #actor` and `#play #audience` would be sent to the Client
when it is ushered in through Actor and Audience Tickets, respectively.

Data sent from the Actor via the WebSocket would be written to the Standard Input of the Child-Process/Play;
while data read from the Standard Output and Standard Error of the Child-Process/Play would be sent to the Actor.

On the other hand, the Audience can only receive data from the Standard Output of the Child-Process/Play.
## Author

Faddy Michel Samaan
`<faddy@teatro13.com>`
@faddymichel
