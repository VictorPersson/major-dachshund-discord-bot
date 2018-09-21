const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const spacer = ('▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄');

// Greats a new client
const client = new Discord.Client();
// Imports and creates an extented version of JS array functions
client.commands = new Discord.Collection();
// fs.readdirSync returns an array with all module fles in folder commands and filters out all files without .js extention
const cooldowns = new Discord.Collection();

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
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) return;

if (command.guildOnly && message.channel.type !== 'text') {
    return message.reply(`You can't run that command here, head over to a #text-channel!`);
}

if (command.args && !args.length) {
    let reply = `You did not provide any valid arguments ${message.author}!`;

    if (command.usage) {
        reply += `\nPlease use:\`${prefix}${command.name} ${command.usage}\``;
    }
    return message.channel.send(reply);
}

if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Discord.Collection());
}

const now = Date.now();
const timestamps = cooldowns.get(command.name);
const cooldownAmount = (command.cooldown || 3) * 100;

if (!timestamps.has(message.author.id)) {
    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
}
else {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

    if (now < expirationTime) {
        const timeLeft = (expirationTime - now) / 1000;
        return message.reply(`Guard doggie: Woff please wait ${timeLeft.toFixed(1)} more second(s) before you try \` ${command.name}\` again!`);
    }

    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
}

try {
    command.execute(message, args);
} 

catch (error) {
    console.log(error);
    message.reply('An error occurred trying to execute your command.')
}
});

client.login(token);