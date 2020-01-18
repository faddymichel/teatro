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
