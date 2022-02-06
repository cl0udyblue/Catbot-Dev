const { MessagEmbed, MessageEmbed } = require('discord.js')
module.exports = {
    name: "credits",
    description: "credits for the creators of the bot!",
    async run(client, message, args){
        message.reply({ embeds:[
            new MessageEmbed()
            .setTitle('Froggie Credits')
            .addFields([
                { name: 'Main Developer', value: `froggiecloud#0001`, inline: true },
                { name: 'Icons', value: `[Icons](https://discord.gg/c7n2Ztr2Kv)`, inline: true },
                { name: 'Very Cool Person who helped a ton with development', value: `alyssa🌺#4604`, inline: true }
              ])
        ]})
    }
}