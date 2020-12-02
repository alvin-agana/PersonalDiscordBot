module.exports = {
    name: 'treat',
    description: "this is a command to give a treat to the bot",
    execute(message, args){
        let i = Math.floor((Math.random() * 3) + 1);
        switch (i) {
            case 1:
                message.channel.send('Yummy!! Thank you master! <3');
                break;
            case 2:
                message.channel.send('Mmmm, my favorite! I will continue to be a good boi. <3');
                break;
            case 3:
                message.channel.send('Wow, thank you master!!! <3');    
                 break;
        }
    }
}