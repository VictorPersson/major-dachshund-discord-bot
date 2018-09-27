module.exports = {
    name: 'role',
    description: 'Command to set users role',
    args: true,
    usage: '<user> <role>',
    execute(message, args) {
        if (member.roles.some(role => role.name === 'Admin')) {
            message.channel.send('Hello lamkött!');
            console.log('Worki work')
         }
         else {
             console.log('Error')
         }
    }
}