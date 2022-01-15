const { MessageEmbed } = require(`discord.js`)
module.exports = {
    name: "americans",
    aliases: ['american', 'lmaoamericans', 'whatamericansreallymean'],
    run: (client, message, args) => {
        message.channel.send({ embeds:[
            new MessageEmbed()
            .setTitle(`lol americans`)
            .setImage('https://cdn.discordapp.com/attachments/910377008666664981/931977896338280468/image.png')
            .setColor(`RANDOM`)
        ] })
    }
}