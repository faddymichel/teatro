module .exports = require ( 'yargs' )
.option ( 'host', {

alias: 'H',
group: 'Address:',
description: 'The host on which Teatro will listen for new connections.',
default: 'localhost',
type: 'string'

} )
.option ( 'port', {

alias: 'P',
group: 'Address:',
description: 'The port on which Teatro will listen for new connections.',
default: 1313,
type: 'number'

} )
.argv;
