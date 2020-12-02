module.exports = {
    name: 'hello',
    description: "this is a command to say hello to michi",
    execute(message, args){
        let d = new Date();
        let h = d.getHours();
        if (h < 7) {
            message.channel.send('*woof* You are up late! That is not good for your health. But hello there!');
        } else if (h < 12) {
            message.channel.send('Good morning! Rise and shine, remember to eat breakfast! *woof*');
        } else if (h < 18) {
            message.channel.send('Hi! I hope you are having a wonderful day so far! *woof woof*');
        } else if (h < 22) {
            message.channel.send('Good evening! Did you eat a yummy dinner today? *sluuuuurp*');
        } else {
            message.channel.send('Hello master! It is getting late. Please get some sleep soon! *zzZzzZz*');
        }
    }
}