/**
 * Eighteen seconds of spam.
 */
var readline = require( 'readline' );
var fs = require( 'fs' );
var butter = true;
module.exports = {
	commands: {
		buttery: {
			help: 'Sings a lovely song',
			aliases: [ 'biscuit', 'base', 'wobble' ],
			privileged: true, // very spammy!
			command: function ( bot, msg ) {
				if ( !butter ) {
					return;
				}
				if ( Math.random() > 0.66 ) {
					var rl = readline.createInterface( {
						input: fs.createReadStream( __rootdir + '/data/buttery.txt' ),
						terminal: false
					} );
					rl.on( 'line', function ( line ) {
						bot.say( msg.to, line + '\u200b' /* zero width space */ );
					} );
				}
			}
		},
		rms: {
			help: 'Pedantically corrects someone',
			aliases: [ 'interject', 'rms' ],
			privileged: true, // very spammy!
			command: function ( bot, msg ) {
				if ( !butter ) {
					return;
				}
				var rl = readline.createInterface( {
					input: fs.createReadStream( __rootdir + '/data/rms.txt' ),
					terminal: false
				} );
				rl.on( 'line', function ( line ) {
					bot.say( msg.to, line + '\u200b' /* zero width space */ );
				} );
			}
		},
		acid: {
			help: 'Toggles the lovely song',
			aliases: [ 'nobiscuit', 'nobase', 'nowobble' ],
			privileged: true,
			command: function () {
				if ( butter ) {
					butter = false;
					return 'disabled base';
				}
				butter = true;
				return 'enabled base';
			}
		}
	}
};
