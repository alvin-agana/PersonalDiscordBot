module.exports = {
    name: 'bad',
    description: "this is a command when michi receives an unrecognized command",
    execute(message, args){
        message.channel.send('Sorry master, I will fix my bugs! :<');
    }
}