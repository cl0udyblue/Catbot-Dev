module.exports = {
  name: 'ping',
  description: 'Get bot ping.',
   run: (client, message, args) => {
    message.reply({ content:'Pong! <:icons_link:859388126875484180>',  allowedMentions: { repliedUser: false } })
   }};