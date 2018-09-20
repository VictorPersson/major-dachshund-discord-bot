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
    // if (!message.content.startsWith(prefix) || message.author.bot) return;

    // Creates an args variable which slices off the ! and then splits it into an array with spaces
    const args = message.content.slice(prefix.length).split(/ +/);

    // Creats a command variable, which takes the first element of the array returns it, also removing it from the original array
    const command = args.shift().toLowerCase();


    if (message.content === `${prefix}marko`) {
        message.channel.send('Polo!');
    }

    // Will trigger whenever beep is mention
    else if (message.content === `Är Eddie bögen i buren?`) {
        message.channel.send('Nej, han är ju lös! Ahhhhhh!');
    } 
    
    else if (message.content === `Är Victor bögen i buren?`) {
        message.channel.send('Är det något fel med att vara homosexuell eller?');
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


    else if (command === 'kick') {

        // grab the "first" mentioned user from the message
        // this will return a `User` object, just like `message.author`
        const taggedUser = message.mentions.users.first();

        // if (!message.mentions.user.size) / If there are no tagged users (false) / 0 number do this.
        if (taggedUser === undefined) {
            return message.reply('You did not mention any existing user! You must use tag @username')
        }

        else {
            message.reply(`You wanted to kick: ${taggedUser.username}`);
        }
    }

    else if (command === `avatar`) {
        // Checks to see if there are no follow up message/argument, then disply authors avatar
        if (!message.mentions.users.size) {
            message.channel.send(`This is your avatar ${message.author.displayAvatarURL}`);
        }
        // Creates a array which maps over all mentions of users and returns thier avatars as a URL img.
        const avatarList = message.mentions.users.map(user => {
            return `${user.username}'s avatar: ${user.displayAvatarURL}`;

        });
        // Posts/sends the list of avatar URLS
        message.channel.send(avatarList);
    }

    else if (command === 'delete') {

        // Creates an amount variable which stores the user number int input in an array.
        // + 1 since if you wish to remove 5 messages it will remove yours, and 4 more. Hence the +1 to make it accurate.
        const amount = parseInt(args[0]) + 1;

        // Checks to see if the amount given IS NOT A NUMBER, if so, send feeedback and try again.
        if (isNaN(amount)) {
            return message.reply(`"${message.content}" doesn't seem to be a number`);
        }
        // Parse can only remove a minimum of 2 objects and a max of 100 so this if/else try is needed to avoid errors.
        else if (amount <= 1 || amount > 100) {
            return message.channel(`You have to input a number between 1 and 99`);
        }

        // Removes the given amount of messages in the channel
        // If some or all messages are older than 2 weeks, it will trow a catch error insted of removing the messages.
        message.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            message.channel.send('There was an error trying to delete all or some messages from this channel!');
        });
    }
});

// The bots password aka Token, never leak/share.
client.login(token);

