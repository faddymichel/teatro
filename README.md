## Synopsis

```
teatro [ --host=<HOST> | -H <HOST> ] [ --port=<PORT> | -P <PORT> ]
```
## Description

Teatro is a WebSocket Server where Shell Child-Processes can be created and accessed through Tickets.

### Overview

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

Since it is the Host playing now, `#play #host# is sent to the Client.
The Host, then, sends `?command`.
When the Client responds with a command,
the Host attempts to start a new Child-Process/Play in which the command would start running.
If the Play starts successfully,
the Host issues a Producer Ticket and responds to the Client with `#ticket #issue #producer <STAMP>`.
Or, responds with `#false` otherwise.
Finally, the Host leaves and the Usher is back to play.

In case of success,
the Client should probably provide the Usher with the newly given `<STAMP>` so that the Producer Ticket plays.

### Put Everything in Order before Playing

Similar to prior tickets,
`#play #producer` is sent;
informing the Client that the Producer is playing.
The Producer asks the Client for an order to execute by sending `?order`.
The client may write one of the following orders:

* ```
issue <ROLE>
```
This will issue a new Ticket for the specified `<ROLE>`;
where `producer`, `actor` and `audience` are the allowed values of `<ROLE>`.

* ```
cancel <STAMP>
```
This will cancel the Ticket related to the specified `<STAMP>`,
only if, the `<STAMP>` is related to an existing Ticket and the Ticket was issued for the Play the Producer is responsible for.

* ```
end
```
This will end the play and cancel all of its Tickets.
