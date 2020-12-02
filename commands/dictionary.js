const fs = require('fs');
const fetch = require('node-fetch');
const { Http2ServerRequest } = require('http2');
const { type } = require('os');
const Discord = require('discord.js');

module.exports = {
    name: 'dictionary',
    description: "this is a command to get the definition of a word",
    execute(message, args){
        let word = message.content.split(" ")[1];
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then(response => {
            return response.json();
        })
        .then(parsedWord => {
                const wordEmbed = new Discord.MessageEmbed()
                    .setColor('#AB32FD')
                    .setTitle(`${parsedWord[0].word} ${parsedWord[0].phonetics[0].text}`)
                    .setDescription(`
                    Part of Speech: ${parsedWord[0].meanings[0].partOfSpeech}
                    Top Definition: ${parsedWord[0].meanings[0].definitions[0].definition}
                    Example: ${parsedWord[0].meanings[0].definitions[0].example}
                    `)
                message.channel.send(wordEmbed)
            })
        .catch(error => {
            message.channel.send("Error; Invalid word. Please double check that your word is spelled correctly and that it does not have numbers.*woof*")
            console.error('error:', error)
        });
    }
}
