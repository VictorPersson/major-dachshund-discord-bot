const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const spacer = ('▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄');

const client = new Discord.Client();

client.on('ready', () => {
    console.log(spacer + '\n ☆ All hands on deck! ☆ \n Major Bot is now online \n' + spacer);
});

client.on('message', message => {
    
    if (!message.content.startsWith(prefix) || message.author.bot) return;
   
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'marko') {
        message.channel.send('Polo!');
    }

    else if (command === 'ping') {
        message.channel.send('!Pong');
    }
});

client.login(token);