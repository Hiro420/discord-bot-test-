const { MessageEmbed } = require("discord.js");
const moment = require("moment")
module.exports = {
  name: "userinfo",
  description: "Information about a user",
  run: async (Bot, msg, args) => {
	let user;
if (msg.mentions.users.first()) {
    user = msg.mentions.users.first();
} else {
    user = msg.author;
}
var member = user;


    const embeduserinfo = new MessageEmbed()
    .setColor("RANDOM")
    .setThumbnail(msg.author.avatarURL)
    .setImage("https://cdn.discordapp.com/avatars/"+msg.author.id+"/"+msg.author.avatar+".jpeg")
    .addField(`${user.tag}`, `${user}`, true)
    .addField("ID:", `${user.id}`, true)
    .addField("Permissions:", `${user.permissions}`, true)
    .addField("Nickname:", `${user.id.displayName}`, true)
    .addField("In Server", msg.guild.name, true)
    .addField("Bot:", `${user.bot}`, true)
    .addField("Joined The Server On:", `${moment.utc(user.joinedAt).format("dddd, MMMM Do YYYY")}`, true)
    .addField("Account Created On:", `${moment.utc(user.createdAt).format("dddd, MMMM Do YYYY")}`, true)
	msg.channel.send( {embeds: [embeduserinfo]} )
  }
  
};