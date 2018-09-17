module.exports = {
    name: 'delete',
    description: 'Delete!',
    execute(message, args) {
         if (command === 'delete') {

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

        });

    },
};