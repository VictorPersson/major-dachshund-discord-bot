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

// Sends a message back to the user in the same channel, uses the dynamic {prefix} from the config file where it can be changed.
client.on('message', message => {
    if (message.content === `${prefix}marko`) {
        message.channel.send('Polo!');
    }
    // Will trigger whenever beep is mention, !beeping, !beepoliros or !beep test. 
    else if (message.content.startsWith === `${prefix}beep`) {
        message.channel.send('Boop!');
    }
    // Checks for keyword 'server' and sends back the name of the guild aka server.
    else if (message.content === `${prefix}server`) {
        message.channel.send(`Server's name is: ${message.guild.name}`);
    }
});

// The bots password aka Token, never leak/share.
client.login(token);

