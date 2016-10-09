var twss = require( 'twss' );
module.exports = {
	events: {
		message: function ( bot, nick, to, text ) {
			if ( twss.is( text ) ) {
				bot.shout( to, nick + ': that\'s what she said' );
			}
		}
	}
};
