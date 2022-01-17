module.exports = {
    name: 'ping',
    description: 'Get bot ping.',
    async run(client, message, args){
      let members = await msg.guild.members.fetch();
      message.reply({ embeds:[
        new Discord.MessageEmbed()
        .setTitle()
      ],  allowedMentions: { repliedUser: false }  })
     }};