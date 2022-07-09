const fs = require('fs');
const fs = require('node:fs');
const path = require('node:path');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');
const booba = require('./commands/booba');
const ping = require('./commands/ping');
const Discord = require("discord.js")
const fs = require('node:fs');
const token = require('./config.json');
const path = require('node:path');
const client = new Discord.Client();
const eventsPath = path.join(__dirname, 'events');
const commandsPath  = path.join(__dirname, 'commands');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));
const prefix = config.prefix

const commands = [booba, ping, kick, reload];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
	try {
		await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log('Successfully registered application commands.');
	} catch (error) {
		console.error(error);
	}
})();