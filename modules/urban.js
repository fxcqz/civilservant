var urban = require( 'urban' );
module.exports = {
	commands: {
		urban: {
			aliases: [ 'ud' ],
			help: 'Looks up a headword in Urban Dictionary',
			command: function ( bot, msg ) {
				if ( msg.args.length === 1 ) {
					return ': Usage: !urban <headword>';
				}
				var req = urban( msg.body );
				req.first( function ( data ) {
					if ( typeof data === 'undefined' ) {
						bot.say( msg.to, msg.nick + ': unable to find a definition for ' + msg.args.join( ' ' ) );
					} else {
						bot.say( msg.to, msg.nick + ': ' + data.definition /* + ' ' + data.permalink */ );
					}
				} );
			}
		}
	}
};
