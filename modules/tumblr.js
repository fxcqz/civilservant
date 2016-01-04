var fs = require( 'fs' );
module.exports = {
	commands: {
		tumblr: {
			help: 'Returns a random question from a selection of viral Tumblr questions.',
			aliases: [ 'truth', 'question', 'conversationprompt' ],
			command: function ( bot, msg ) {
				var file = fs.readFileSync( __rootdir + '/data/tumblr.txt', { encoding: 'utf-8' } );
				var questions = file.split( '\n' );
				var index = msg.args[1] || Math.floor( Math.random() * questions.length );
				return '[Question ' + index + '] ' + questions[index];
			}
		}
	}
};