import { Scenario } from 'scenarist';

const nota = Scenario ();

nota ( {}, 'note', 'record' );
nota ( {}, 'book', 'notebook', 'binder' );

nota ( 'note', ( bookmark, ... note ) => nota ( 'book', bookmark, note .join ( ' ' ) ), 'write', 'create', 'add', 'new' );
nota ( 'note', ( bookmark ) => console .log ( nota ( 'book', bookmark ) ), 'read', 'view', 'show' );

process .stdin .setEncoding ( 'utf8' );
process .stdin .on ( 'data', line => {

line = line .trim () .split ( ' ' );
nota ( 'note', ... line );

} );
