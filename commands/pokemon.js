const fs = require('fs');
const fetch = require('node-fetch');
const { Http2ServerRequest } = require('http2');
const { type } = require('os');
const Discord = require('discord.js');

module.exports = {
    name: 'pokemon',
    description: "this is a command to get the info of a pokemon",
    execute(message, args){
        let pokemon = message.content.split(" ")[1];
        if (typeof pokemon !== "string") {
            message.channel.send('Invalid. Please type a string. *woof*!').catch(console.error)
            return;
        } else {
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(response => {
                return response.json();
            })
            .then(parsedPokemon => {
                    let pName = parsedPokemon.name.charAt(0).toUpperCase() + parsedPokemon.name.slice(1);
                    let pHeightTemp = parsedPokemon.height * 0.1;
                    let pWeightTemp = parsedPokemon.weight * 0.1;
                    let pHeight = pHeightTemp.toFixed(2);
                    let pWeight = pWeightTemp.toFixed(2);

                    //let checkLegendary = "";
                    //if (parsedPokemon.species.is_legendary === true) {
                    //    checkLegendary = "This pokemon is a legendary pokemon!";
                    //}
                    
                    const pokeEmbed = new Discord.MessageEmbed()
                        .setColor('#FBEEE6')
                        .setTitle(`${pName} #${parsedPokemon.id}`)
                        .setDescription(`
                        ${pName} is a(n) ${parsedPokemon.types[0].type.name} type pokemon. 
                        Height: ${pHeight} meters
                        Weight: ${pWeight} kg
                        
                        `)
                        .setImage(`${parsedPokemon.sprites.front_default}`)
                    message.channel.send(pokeEmbed)
                })
            .catch(error => {
                message.channel.send("Error; you either typed a non-existent pokemon or you did not type a string. *woof*")
                console.error('error:', error)
            });
        }
    }
}