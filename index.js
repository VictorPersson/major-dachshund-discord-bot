const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const spacer = ('▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄');

// Greats a new client
const client = new Discord.Client();
// Imports and creates an extented version of JS array functions
client.commands = new Discord.Collection();
// fs.readdirSync returns an array with all module fles in folder commands and filters out all files without .js extention
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
    console.log(file)
}

client.on('ready', () => {
    console.log(spacer + '\n ☆ All hands on deck! ☆ \n Major Bot is now online \n' + spacer);
});

client.on('message', message => {
    
    if (!message.content.startsWith(prefix) || message.author.bot) return;
   
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'marko') {
        client.commands.get('marko').execute(message, args);
    }
    else if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    }
    else if (command === 'server') {
        client.commands.get('server').execute(message, args);
    }
    else if (command === 'avatar') {
        client.commands.get('avatar').execute(message, args);
    }
    else if (command === 'delete') {
        client.commands.get('delete').execute(message, args);
    }
    else if (command === 'kick') {
        client.commands.get('kick').execute(message, args);
    }
    else if (command === 'user-info') {
        client.commands.get('user-info').execute(message, args);
    }
    else if (command === 'args-info') {
        client.commands.get('args-info').execute(message, args)
    }
});

client.login(token);