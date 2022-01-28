module.exports = (client, message) => {
    // Ignore all bots
    if (message.author.bot) return;
    if (message.content.startsWith("support")) {
      message.author.send({ content:"Hey there, I hear you might not be feeling too great. I may be a bot, but I'm written by people, and those people love you. You are seen. You are heard. You matter. <3" })
    }
    // Ignore messages not starting with the prefix (in config.json)
    if (message.content.indexOf(client.config.prefix) !== 0) return;
  
    // Our standard argument/command name definition.
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    // Grab the command data from the client.commands Enmap
    const cmd = client.commands.get(command) || client.commands.find(a => a.aliases && a.aliases.includes(command));
  
    // If that command doesn't exist, silently exit and do nothing
    if (!cmd) return;
  
    // Run the command
    cmd.run(client, message, args);
    
  };