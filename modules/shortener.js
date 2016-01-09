var Bitly = require( 'bitly' );
module.exports = {
	events: {
		url: function ( bot, url, nick, to ) {
			var bitly = new Bitly( bot.config.bitly.username, bot.config.bitly.password );
			bitly.shorten( url.href, function ( err, res ) {
				console.log( JSON.stringify( res ) );
				if ( err ) {
					bot.shout( to, 'err: ' + err );
				}
				if ( res.data.url ) {
					bot.shout( to, res.data.url );
				}
			} );
		}
	}
};
