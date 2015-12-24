/**
 * nickcount.js
 *
 * Keeps track of nicks.
 *
 * !nickcount
 * Replies with the cumulative count of nicknames tracked.
 *
 * !msgcount
 * Replies with the count of messages received since last connect.
 */
var bot = require( '..' );
var fs = require( 'fs' );

var nicks = require( __dirname + '/../data/channel-nicks.json' );
var count = 0;

bot.addListener( 'nick', function ( oldnick, newnick, channels ){
	nicks.push({
		'new': newnick,
		'old': oldnick,
		'ts': Date.now(),
		'channels': channels
	});
	fs.writeFile( __dirname + '/../data/channel-nicks.json', JSON.stringify( nicks, null, 4 ) );
} );

bot.addListener( 'message', function ( nick, to, text ) {
	count++;
	if ( text === '!nickcount' ) {
		bot.say( to, nick + ': ' + Array.length + ' nick changes tracked' );
	} else if ( text === '!msgcount' ) {
		bot.say( to, nick + ': ' + count );
	}
} );
