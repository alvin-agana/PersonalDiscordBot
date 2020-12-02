module.exports = {
    name: 'love',
    description: "this is a command to send love to michi",
    execute(message, args){
        message.channel.send('I love you! <3 <3 <3');
    }
}