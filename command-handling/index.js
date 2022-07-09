const { Client, Intents } = require('discord.js');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const fs = require('node:fs');
const token = require('./config.json');
const path = require('node:path');
const eventsPath = path.join(__dirname, 'events');
const commandsPath  = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));
const prefix = config.prefix
const message = require("discord.js");

client.login(token)
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.lenght).split(/ +/)
    const command = args[1].toLowerCase()
    console.log(args)
    //Command test!
})