const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
module.exports = {
  name: 'test',
  description: 'Get bot ping.',
  async run (client, message, args) {
    const row = new MessageActionRow()
    .addComponents(
      new MessageButton()
        .setLabel('Test')
        .setStyle('LINK')
        .setURL('https://google.com'),
    );
  const embed = new MessageEmbed()
  .setColor('#0099ff')
  .setTitle('Test')
  .setDescription('Bottom text');

  await message.reply({ content: 'Pong!', embeds: [embed], components: [row] });
},
};