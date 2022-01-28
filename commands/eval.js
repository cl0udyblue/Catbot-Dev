module.exports = {
    name: 'eval',
    aliases: ['ev'],
    async run(client, message, args) {
            if (!message.author.id === '785339585571061802') return await message.reply('you suck')
        
            try {
                const code = args.join(' ')
                const evaled = await eval(code)
          await message.reply(`${evaled}`)
            } catch (err) {
                await message.reply(`ERROR HAPPENED\n${err.message}`)

}}};