module.exports = {
    name: 'avatar',
    description: 'Prints the discord avatar for the tagged user',
    execute(message) {
        if (!message.mentions.users.size) {
            message.channel.send(`This is your avatar ${message.author.displayAvatarURL}`);
        }
        const avatarList = message.mentions.users.map(user => {
            return `${user.username}'s avatar: ${user.displayAvatarURL}`;
});
        message.channel.send(avatarList);
  },
};