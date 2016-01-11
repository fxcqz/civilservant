module.exports = {
	commands: {
		say: {
			help: 'Notices the current channel with arbitrary text',
			command: function ( bot, msg ) {
				msg.args.shift();
				console.log( bot.to );
				bot.notice( msg.to, msg.args.join( ' ' ) );
			}
		},
		nick: {
			help: 'Changes the nickname of the bot',
			privileged: true,
			usage: [ 'nickname' ],
			command: function ( bot, msg ) {
				bot.send( 'NICK', msg.args.nickname );
			}
		},
		src: {
			help: 'Returns a link to the bot\'s source code',
			aliases: [ 'source', 'patchwelcome' ],
			command: function () {
				return 'https://github.com/zuzakistan/civilservant';
			}
		},
		quit: {
			privileged: true,
			help: 'Causes the bot to quit',
			command: function ( bot, msg ) {
				console.log( 'QUITTING after command by ' + msg.nick + ' in ' + msg.to );
				process.exit( 0 );
			},
		},
		control: {
			help: 'Checks whether the current channel is able to execute priveleged commands',
			command: function ( bot, msg ) {
				if ( msg.to === bot.config.irc.control ) {
					return 'this is the control channel';
				}
				return 'this is not the control channel';
			}
		},
		quiet: {
			help: 'Checks whether the bot is set to \'quiet\' mode',
			command: function ( bot ) {
				if ( bot.config.irc.quiet ) {
					return 'quiet; can\'t talk unless spoken to';
				}
				return 'loud: may talk without explicit interaction';
			}
		}
	}
};
