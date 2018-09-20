module.exports = {
    name: 'ping',
    description: 'A ping - pong function',
    execute(message, args) {
        message.channel.send('Pong!');
    },
};