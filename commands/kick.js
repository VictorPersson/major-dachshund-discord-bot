module.exports = {
    name: 'kick',
    description: 'Example "stub" of a user kick command.',
    guildOnly: true,
    execute(message) {
        const taggedUser = message.mentions.users.first();


        if (taggedUser === undefined) {
            return message.reply('You did not mention any existing user! You must use tag @username')
        }

        else {
            message.reply(`You wanted to kick: ${taggedUser.username}`);
        };
    }
};