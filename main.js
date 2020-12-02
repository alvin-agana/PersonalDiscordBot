const Discord = require('discord.js');
const fs = require('fs');
const fetch = require('node-fetch');

const TOKEN = "{insert discord key here}";
const client = new Discord.Client();
const prefix = '!';


client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Michi is now ready to go!');
});


client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (message.content.includes("!weather") && message.author.bot === false) {
        client.commands.get('weather').execute(message, args);
        return;
    } else if (message.content.includes("!pokemon") && message.author.bot === false) {
        client.commands.get('pokemon').execute(message, args);
        return;
    } else if (message.content.includes("!define") && message.author.bot === false) {
        client.commands.get('dictionary').execute(message, args);
        return;
    } else {
        switch(command) {
            case 'treat':
            case 'gooddog':
            case 'headpat':
            case 'goodboi':
                client.commands.get('treat').execute(message, args);
                break;
            case 'michi':
                client.commands.get('shiba').execute(message, args);
                break;
            case 'hello':
            case 'hi':
            case 'hey':
                client.commands.get('hello').execute(message, args);
                break;
            case 'love':
            case 'iloveyou':
            case 'iloveu':
                client.commands.get('love').execute(message, args);
                break;
            case 'howareyou':
                client.commands.get('howareyou').execute(message, args);
                break;
            case 'bye':
            case 'goodnight':
            case 'seeyoulater':
                client.commands.get('bye').execute(message, args);
                break;
            case 'commandlist':
                client.commands.get('commandList').execute(message, args);
                break;
            case 'bad':
                client.commands.get('bad').execute(message,args);
                break;
            case 'kirby':
                client.commands.get('kirby').execute(message,args);
                break;
            default:
                client.commands.get('default').execute(message, args);
                break;
        }
    }
})

client.login(TOKEN);
