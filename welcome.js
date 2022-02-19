const Discord = require("discord.js");

module.exports = (client) => {
    const channelId = '818221577602465845';
    const rulesChannel = '818224328100675605'
    client.on("guildMemberAdd", (member) =>{
        console.log(member);


        const message = new Discord.MessageEmbed()
        .setTitle("Welcome")
  .setAuthor(`Owners of this server`)
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription(`<@${member.id}> just hopped on the trend! Check out the ${member.guild.channels.cache.get(rulesChannel)}`)
  .setImage("https://cdn.discordapp.com/attachments/818221577602465845/818254853003542598/discord-logo-transparent-circle-9.png")
  .setThumbnail("https://cdn.discordapp.com/attachments/818221577602465845/818254853003542598/discord-logo-transparent-circle-9.png")




        const channel = member.guild.channels.cache.get(channelId);
        message.channel.send(message)
    })
}