module.exports = {
    name: 'server',
    description: 'Prints information about the guild',
    execute(message) {
        message.channel.send(`Server's name is: ${message.guild.name}\nTotal users: ${message.guild.memberCount}\nServer location: ${message.guild.region}`);
    },
};