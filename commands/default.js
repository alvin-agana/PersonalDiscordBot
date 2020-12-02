module.exports = {
    name: 'default',
    description: "this is a command when michi receives an unrecognized command",
    execute(message, args){
        message.channel.send('I am not sure what you are asking. Try another command! Like -treat-! *woof*');
    }
}