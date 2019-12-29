# Teatro: Play the Shell through WebSocket Tickets

Teatro is a WebSocket Server where Shell Child-Processes can be created and accessed through Tickets.

## Overview

When a Teatro opens, a WebSocket server is created.
Teatro waits for the server to start listening to create the Host Ticket; an event is emitted along with the stamp used to find this ticket.
Now, Teatro is ready to host Plays.

In case a WebSocket client connects to Teatro, Teatro asks the client for a ticket.
At first, only the Host Ticket is available.
If the client provides the stamp of this ticket, Teatro starts the Host Play.
The  play starts by asking the client for a command.
If the client responds with a valid command, the play continues by spawning a child process for this command.
Then, the client receives two stamps for two tickets; one for the Actor and another for the Audience.
The Actor Ticket can be used by any newly connected client, so that whatever data is sent from the client would be piped to the Standard Input of the child process,
and whatever data appears from the Standard Output would be sent back to the client.
The Audience Ticket works in a similar manner except that it would only receive data from the Standard Output of the child process;
no data can be piped to the Standard Input.
Finally, the play restarts and asks the connected client for a command.

## Installation

## Usage

## Author

Faddy Michel Samaan <faddy@teatro13.com>
