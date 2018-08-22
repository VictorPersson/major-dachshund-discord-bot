const Discord = require('discord.js');

// Imports data from our .json file, while also def our prefix and token.
const { prefix, token } = require('./config.json');

// Spacer function which returns a string of 
const spacer = ('▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄');

// Creates a constant client for the bot
const client = new Discord.Client();

//Waits until the bot client is ready, after that it runs the following code.
client.on('ready', () => {
    console.log('☆ All hands on deck! ☆ \n Major Bot is now online \n' + spacer);
});

// Sends a message back to the user in the same channel
client.on('message', message => {
    if (message.content === '!marko' || '!Marko') {
            message.channel.send('Polo!');
    }
});

// The bots password aka Token, never leak/share.
client.login(token);