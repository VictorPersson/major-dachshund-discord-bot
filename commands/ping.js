module.exports = {
    name: 'ping',
    description: 'A ping - pong function',
    cooldown: 5,
    execute(message) {
        message.channel.send('Pong!');
    },
};