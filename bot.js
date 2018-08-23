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

    // Checks if the user message doesn't start with an ! or is written by the bot,then the following code will NOT run.
    if (!message.content.startsWith(prefix) || message.author.bot) return;


    // Creates an args variable which slices off the ! and then splits it into an array with spaces
    const args = message.content.slice(prefix.length).split('/ +/');

    // Creats a command variable, which takes the first element of the array returns it, also removing it from the original array
    const command = args.shift().toLowerCase();


    if (message.content === `${prefix}marko`) {
        message.channel.send('Polo!');
    }

    // Will trigger whenever beep is mention
    else if (message.content === `${prefix}beep`) {
        message.channel.send('Boop!');
    }

    // Checks for keyword 'server' and sends back the name of the guild aka server.
    else if (message.content === `${prefix}server`) {
        message.channel.send(`
        Server's name is: ${message.guild.name}\nTotal users: ${message.guild.memberCount}\nServer location: ${message.guild.region}
        `);
    }

    // Checks for the term !user-info,returns name and ID of the user (author) who send the request
    else if (message.content === `${prefix}user-info`) {
        message.channel.send(`
        Your user name is: ${message.author.username}\nYour ID is: ${message.author.id}
        `)
    }

    // If the command if !args-info and is not followed up, it tags the user and says so. If user does provide argiments after !args-info
    // -the bot will return what the user wrote. Thirdly, if the first word in the array [0] is foo, you recive 'bar' back.
    else if (command === 'args-info') {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }

        else if (args[0] === 'foo') {
            return message.channel.send('bar');
        }

        message.channel.send(`Command name: ${command}\nArguments: ${args}\nFirst argument: ${args[0]}`);
    }
});

// The bots password aka Token, never leak/share.
client.login(token);

