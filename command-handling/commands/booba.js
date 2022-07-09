exports.run = (client, message, args) => {
    message.channel.send("yes").catch(console.error);
}

exports.name = "booba";