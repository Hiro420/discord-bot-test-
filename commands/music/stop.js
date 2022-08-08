const { Command } = require('discord.js-commando');

module.exports = class StopMusicCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'stop',
			aliases: ['kill', 'stfu'],
			group: 'music',
			memberName: 'stop',
			description: 'Stops the music and wipes the queue.',
			details: 'Only moderators may use this command.',
			guildOnly: true,
			throttling: {
				usages: 2,
				duration: 3
			}
		});
	};
    async run(message) {
        // don't let users run this command if they are not in a voice channel
        var voiceChannel = message.member.voice.channel;
        message.say('Ok');
        message.guild.musicData.isPlaying = false;
        return voiceChannel.leave();
    }
}