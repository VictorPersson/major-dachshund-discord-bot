module.exports = {
    name: 'delete',
    description: 'Removes up to 99 messages',
    execute(message, args) {
        const amount = parseInt(args[0]) + 1;

        if (isNaN(amount)) {
            return message.reply(`${message.content}" doesn't seem to be a number`);
        } else if (amount <= 1 || amount > 100) {
            return message.channel(`You have to input a number between 1 and 99`);
        }
        
        message.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            message.channel.send('There was an error trying to delete all or some messages from this channel!');
        });
    },
};