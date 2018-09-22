const { prefix } = require('../config.json');

module.exports = {
    name: 'help',
    description: 'Dynamic help command, showing all commands & information about them',
    aliases: ['help'],
    usage: '[command name]',
    cooldown: 5,
    execute(message, args) {

        const data = [];
        const { commands } = message.client;

        if (!args.length) {
            data.push('List of all avalible commands: ');
            data.push(commands.map(command => command.name).join(' , '));
            data.push(`\nYou can send \`${prefix}help [command name]\` to get info about a command!`);

            return message.author.send(data, {split: true})
            // Split the message into 2 messages incause it's over the DC limit (2000char)
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.reply('Check your DM to see all available commands!')
                })
                .catch(error => {
                    console.log(error, `Failed to send help info DM to user: ${message.author.tag}.\n`);
                    message.reply(`I failed to send you a DM with the commands. Make sure you/the server don't have DMs disabled!`);
                });
        }

        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if (!command) {
            return message.reply('Not a valid command(s)');
        }

        data.push(`** ☆ Name:** ${command.name}`);

        if (command.description) data.push(`** ☆ Description** ${command.description}`);
        if (command.aliases) data.push(`** ☆ You may also use:** ${command.aliases.join(' , ')}`);
        if (command.usage) data.push(`** ☆ Usage** ${prefix}${command.usage} ${command.usage}`);

        data.push(`** ☆ Spam protection:** ${command.cooldown || 3} seconds(s)`);

        message.channel.send(data, { split: true});

    },
};