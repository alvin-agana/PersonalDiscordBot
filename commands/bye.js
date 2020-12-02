module.exports = {
    name: 'bye',
    description: "this is a command to say hello to michi",
    execute(message, args){
        let d = new Date();
        let h = d.getHours();
        if (h < 7) {
            message.channel.send('Sleep well master! I hope you do not miss your alarms!');
        } else if (h < 12) {
            message.channel.send('See you later! :)');
        } else if (h < 18) {
            message.channel.send('Take care master! I will be here forever.');
        } else if (h < 22) {
            message.channel.send('Good night, master! :>');
        } else {
            message.channel.send('Good night, master! No ruff dreams for you! >:3');
        }
    }
}