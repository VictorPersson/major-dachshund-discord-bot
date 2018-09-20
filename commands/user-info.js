module.exports = {
    name: "user-info",
    description: "Prints information about tagged user",
    execute(message) {
        message.channel.send(`Your user name is: ${message.author.username}\nYour ID is: ${message.author.id}`)
    },
};