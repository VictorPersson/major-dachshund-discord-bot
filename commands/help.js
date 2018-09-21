const { prefix } = require('../config.json');

module.exports = {
    name: 'help',
    description: 'Dynamic help command, showing all commands & information about them',
    aliases: ['commands', 'help'],
    usage: '[command name]',
    cooldown: 5,
    execute(message, args) {

        const data = [];
        const { commands } = message.client;

        if (!length) {
            data.push('List of all avalible commands: ')
            data.push(commands.map(command => command))
            data.push(`\nYou can send \`${prefix}help [command name]\` to get info about a command!`);
            https://discordjs.guide/#/command-handling/adding-features?id=a-dynamic-help-command

            return message.author.send(data, {s})
        }
    },
};