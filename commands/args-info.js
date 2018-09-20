module.export = {
    name: 'args-info',
    description: 'Information about the provided inputs and arguments',
    execute(message, args) {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }

        else if (args[0] === 'foo') {
            return message.channel.send('bar');
        }

        message.channel.send(`Command name: ${command}\nArguments: ${args}\nFirst argument: ${args[0]}`);
    },
};