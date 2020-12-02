const Discord = require('discord.js');

module.exports = {
    name: 'kirby',
    description: "this is a command to show an embed of kirby",
    execute(message, args){
        const kirbyEmbed = new Discord.MessageEmbed()
            .setColor('#D74894')
            .setTitle(`POYO POYO POYO! Kirby <3`)
            .setDescription(`
            "Kirby has been described as one of the most legendary video game characters of all time by PC World. In virtually all his appearances, Kirby is depicted as cheerful, innocent and food-loving but becomes fearless, bold and clever in the face of danger.
            Kirby has been featured in his own anime series, many manga publications in several countries, comics in numerous countries, and even an educational video co-starring Mario."
            `)
            .setImage(`http://clipart-library.com/image_gallery2/Kirby-PNG-Image.png`)
        message.channel.send(kirbyEmbed)
    }
}