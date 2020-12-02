module.exports = {
    name: 'commandList',
    description: "this is a command to show all commands",
    execute(message, args){
        message.channel.send(`
        These are the commands you can say for Michi:
        All commands MUST have a prefix '!'.

        'treat', 'gooddog', 'headpat', 'goodboi': gives Michi a treat or a headpat

        'michi': shows a picture of Michi

        'hello', 'hi', 'hey': says hello to michi

        'iloveyou', iloveu', 'love': gives Michi love

        'howareyou': asks Michi how he is doing

        'bye', 'goodnight', 'seeyoulater': say bye to michi

        'kirby': shows a description of kirby

        'weather #####': gets weather based on zip code

        'pokemon ______": gets an info of a pokemon (WIP)

        'define ______": defines an english word (WIP)
        `);
    }
}