const fs = require('fs');
const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = {
    name: 'weather',
    description: "this is a command to get the weather of any 5 digit zipcode",
    execute(message, args){
        let zipCode = message.content.split(" ")[1];
        if (zipCode === undefined || zipCode.length != 5 || parseInt(zipCode) === NaN) {
            message.channel.send('Invalid zip code. Please type like *prefix*.weather <#####>, *woof*!').catch(console.error)
            return;
        } else {
            fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&APPID={insert weather key here}`).then(response => {
                return response.json();
            })
            .then(parsedWeather => {
                if (parsedWeather.cod === '404') {
                    message.channel.send("`This zip code does not exist or there is no information available.`");
                } else {
                    const weatherEmbed = new Discord.MessageEmbed()
                        .setColor('#1E82E1')
                        .setTitle(`Here is the weather for location of ${zipCode}! *woof*`)
                        .setDescription(`
                        Location: ${parsedWeather.name}, ${parsedWeather.sys.country}
                        Forecast: ${parsedWeather.weather[0].main}
                        Current Temp: ${(Math.round(((parsedWeather.main.temp - 273.15) * 9/5 + 32)))} degrees Fahrenheit
                        High Temperature: ${(Math.round(((parsedWeather.main.temp_max - 273.15) * 9/5 + 32)))} degrees Fahrenheit
                        Low Temperature: ${(Math.round(((parsedWeather.main.temp_min - 273.15) * 9/5 + 32)))} degrees Fahrenheit
                        `)
                    message.channel.send(weatherEmbed)
                }
            })
        }
    }
}