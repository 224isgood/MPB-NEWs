const Discord = require('discord.js'),
    client = new Discord.Client()

const token = 'OTE0MjU2NDI5Mjg2ODUwNjAx.YaKZpg.BThXZlpILwr9S1B0UscjgdN1t3A'
const prefix = "="
const antispam = require('better-discord-antispam'); // Requiring this module.

//statusits

const activities_list = [ 
    "Playing", 
    "Multi-Purpose Bot",
    ]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 10000); // Runs this every 10 seconds.




});


client.on('ready', () => {
  // Module Configuration Constructor
   antispam(client, {
        limitUntilWarn: 3, // The amount of messages allowed to send within the interval(time) before getting a warn.
        limitUntilMuted: 5, // The amount of messages allowed to send within the interval(time) before getting a muted.
        interval: 2000, // The interval(time) where the messages are sent. Practically if member X sent 5+ messages within 2 seconds, he get muted. (1000 milliseconds = 1 second, 2000 milliseconds = 2 seconds etc etc)
        warningMessage: "if you don't stop from spamming, I'm going to punish you!", // Message you get when you are warned!
        muteMessage: "was muted since we don't like too much advertisement type people!", // Message sent after member X was punished(muted).
        maxDuplicatesWarning: 7,// When people are spamming the same message, this will trigger when member X sent over 7+ messages.
        maxDuplicatesMute: 10, // The limit where member X get muted after sending too many messages(10+).
        ignoredRoles: [""], // The members with this role(or roles) will be ignored if they have it. Suggest to not add this to any random guys. Also it's case sensitive.
        ignoredMembers: [""], // These members are directly affected and they do not require to have the role above. Good for undercover pranks.
        mutedRole: "919295722002714684", // Here you put the name of the role that should not let people write/speak or anything else in your server. If there is no role set, by default, the module will attempt to create the role for you & set it correctly for every channel in your server. It will be named "muted".
        timeMuted: 1000 * 600, // This is how much time member X will be muted. if not set, default would be 10 min.
        logChannel: "" // This is the channel where every report about spamming goes to. If it's not set up, it will attempt to create the channel.
      });
      
  //audit log

const embed = new Discord.MessageEmbed()
.setTitle("MPB - Multi-Purpose Bot")
.setAuthor("Froggers|frog gang#5373 and 𝐊𝐚𝐩𝐫𝐢𝐳𝐚#8561", "https://cdn.discordapp.com/attachments/818221577602465845/818254853003542598/discord-logo-transparent-circle-9.png%'")
 .setColor(0x00AE86)
.setDescription("This bot is an all purpose bot, it will moderate for you, take for example like audit logs and warnings/kicks/bans. It will also be a fun bot that will lighten the mood, we have coded some basic games into this bot that you can play through Discord.")
.setFooter("Join our Discord server", "https://cdn.discordapp.com/attachments/818221577602465845/818254853003542598/discord-logo-transparent-circle-9.png%22")
.setImage("https://cdn.discordapp.com/attachments/818221577602465845/818254853003542598/discord-logo-transparent-circle-9.png%22")
.setThumbnail("https://cdn.discordapp.com/attachments/818221577602465845/818254853003542598/discord-logo-transparent-circle-9.png%2")
 .setTimestamp()
.setURL("https://discord.com/api/oauth2/authorize?client_id=875457394367422465&permissions=8&scope=bot ")


client.on('message', message => {
  if (message.content === '=bot info') {
    // send back "Pong." to the channel the message was sent in
    message.channel.send(message.channel.send({embed: embed}));
  }

});


//bored


var options = ["Your dare is to ping the whole staff crew", "Your dare is to do 75 pushups without stoping and send proof", "Your dare is to memorize Godzilla and rap it in vc", "Your dare is to get 15 cps by next week", "Your dare is to make a 10/10 verse by tomorrow", "Your dare is to join https://discord.gg/RtTQmFcX4E", "Your dare is to go around your house 1 time right now, GO, GO!!", "Your dare is to fix your posture idiot", "Your dare is to stand up for how ever long you use your device", "Your dare is to ask out the girl you really like, NO COMPAINING AND SEND A SCREENSHOT", "Your dare is to admit if you have a crush and if you have balls who it is"];

var response = options[Math.floor(Math.random()*options.length)];

client.on('message', message => {
if (message.content === '=bored')
  
  message.channel.send(response).then().catch(console.error);

});



const TicTacToe = require('discord-tictactoe');
new TicTacToe({ language: 'en', command: '=ttt' })
.login('OTE0MjU2NDI5Mjg2ODUwNjAx.YaKZpg.BThXZlpILwr9S1B0UscjgdN1t3A')
.then(() => console.log('TicTacToe bot is ready to be used.'));




console.log('Is this working')

var usage = "`=hangman <channel id> <your phrase>`\n`Example: =hangman 368845035560763402 grandest nan is the man`";
var letters = ["🇦", "🇧", "🇨", "🇩", "🇪", "🇫", "🇬", "🇭", "🇮", "🇯", "🇰", "🇱", "🇲", "🇳", "🇴", "🇵", "🇶", "🇷", "🇸", "🇹", "🇺", "🇻", "🇼", "🇽", "🇾", "🇿"];
var unicode = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var games = [];

var stages = [`\`\`\`
/---|
|   
|
|
|
\`\`\`
`, `\`\`\`
/---|
|   o
|
|
|
\`\`\`
`, `\`\`\`
/---|
|   o
|   |
| 
|
\`\`\`
`, `\`\`\`
/---|
|   o
|  /|
|
|
\`\`\`
`, `\`\`\`
/---|
|   o
|  /|\\
|
|
\`\`\`
`, `\`\`\`
/---|
|   o
|  /|\\
|  /
|
\`\`\`
`, `\`\`\`
/---|
|   o ~ thanks
|  /|\\
|  / \\
|
\`\`\`
`];

client.on('ready', () => {
client.user.setStatus("=hangman");
console.log(`Logged in as ${client.user.tag}!`);
});

function generateMessage(phrase, guesses) {
var s = "";
for(var i = 0; i < phrase.length; i++) {
  if(phrase[i] == ' ')
    s += " ";
  else {
    var c = phrase[i];
    if(guesses.indexOf(c) == -1)
      c = "\\_";
    s += "__" + c + "__ ";
  }
}
return s;
}

function nextLetter(message, index, word) {
  message.react(letters[index]).then(r => {
  index++;
  if(index < letters.length) {
    if(index == 13) {
      message.channel.send(generateMessage(word, [])).then(m => {
        games.push({
          stage: 0,
          msg0: message,
          msg1: m,
          phrase: word,
          guesses: []
        });
        nextLetter(m, index);
      });
    } else {
      nextLetter(message, index, word);
    }
  }
});
}

client.on('messageReactionAdd', (reaction, user) => {
var msg = reaction.message;
if(!user.bot) {
  for(var i = 0; i < games.length; i++) {
    var game = games[i];
    if((msg.id == game.msg0.id || msg.id == game.msg1.id) && game.stage < stages.length) {
      var letter = unicode[letters.indexOf(reaction.emoji.name)];
      
      reaction.users.fetch().then(usrs => {
        var reactors = usrs.array();
        var remove_next = function(index) {
          if(index < reactors.length)
            reaction.remove(reactors[index]).then(() => remove_next(index + 1));
        };
        
        remove_next(0);
      });
      
      if(game.guesses.indexOf(letter) == -1) {
        game.guesses.push(letter);
        if(game.phrase.indexOf(letter) == -1) {
          game.stage ++;
          game.msg0.edit(stages[game.stage]);
        } else {
          var sik = true;
          for(var j = 0; j < game.phrase.length; j++) {
            var c = game.phrase[j];
            if(c != ' ' && game.guesses.indexOf(c) == -1) {
              sik = false;
            }
          }
          
          if(sik) {
            game.msg0.edit(stages[game.stage].replace("o", "o ~ ur alright.. for now"));
          }
          
          game.msg1.edit(generateMessage(game.phrase, game.guesses));
        }
      }
    }
    games[i] = game;
  }
}
});

client.on('message', msg => {
  if(msg.content.startsWith("=hangman")) {
      var words = msg.content.split('\n')[0].split(' ');
      if(words.length < 2) {
          msg.reply(usage);
      } else {
          var channel = client.channels.cache.find(ch => ch.id == words[1]);
    var word = words.slice(2).join(' ').toLowerCase().replace(/[^a-z\s:]/g, '');
          if(channel != null) {
              channel.send(stages[0]).then(m => {
                  nextLetter(m, 0, word);
              });
          } else {
              msg.reply("No channel with the id `" + words[1] + "` exist! \n" + usage);
          }
      }
  }
});



// Create a new DisTube
const { MusicBot } = require('discord-music-system'); // Require the best package ever created on NPM (= require discord-music-system)

client.musicBot = new MusicBot(client, {
  ytApiKey: 'AIzaSyBLz-kxGaVm2LGPkslB_vWzZURnfWWveSY',
  prefix: '=', // Your bot prefix
  language: 'en' // fr, en, es, pt
});

client.on('message', async message => {
  if(message.author.bot) {
      return;
  };
  client.musicBot.onMessage(message)});
//wrlc

const sendMeme = require("discord-meme");
client.on("message", message => {

if(message.content.toLowerCase() === prefix + "meme"){

sendMeme(message, "Ze Meme"); // you can change it to set embed's title.

}
});








//moderation
const moderationnn = new Discord.Client()
  const PREFIX = "="
  
  moderationnn.login("OTE0MjU2NDI5Mjg2ODUwNjAx.YaKZpg.BThXZlpILwr9S1B0UscjgdN1t3A")
  
  moderationnn.on("ready", () => {
      console.log("Moderation bot by Oofy is booted up :D")
  });
  
  moderationnn.on("message", message => {
      if(message.author.moderationnn) return;
      if (message.content.indexOf(PREFIX) !== 0) return;
  
      const args = message.content.slice(PREFIX.length).trim().split(/ +/g);
      const cmd = args.shift().toLowerCase()
          if (cmd === "help") {
              const helpEmbed = new Discord.MessageEmbed()
                      .setTitle(`${moderationnn.user.username}'s Help Menu`)
                      .setDescription(`**PREFIX - \`${PREFIX}\`**`)
                      .addField("`ping`", "Check my latency to discord servers :D")
                      .addField("`kick`", `Kick someone for being disgracefull\n**Usage: ${PREFIX}kick [@USER] <REASON>**`)
                      .addField("`ban`", `Ban someone for being naughty\n**Usage: ${PREFIX}ban [@USER] <REASON>**`)
                      .addField("`add role`", `Add a role to a user\n**Usage: ${PREFIX}add [@USER] [ROLE]**`)
                      .addField("`remove role`", `Remove a role from a user\n**Usage: ${PREFIX}remove [@USER] [ROLE]**`)
                      .addField("`purge`", `Delete messages in bulk and be lazy :P\n**Usage: ${PREFIX}purge [AMOUNT]**`)
                      .addField("`rps`", `A fun rps command lel\n**Usage: ${PREFIX}rps [rock / paper / scissors]**`)
              message.channel.send(helpEmbed)
          }
  
          if (cmd === "ping") {
              message.channel.send(`Pong!\n**Took ${Date.now() - message.createdTimestamp}ms**`)
          }
  
          if (cmd === "kick") {
              if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Missing Permissions... [Kick members]").then(msg => msg.delete({ timeout : 10000}))
                  const member = message.mentions.members.first()
                  if(!member) return message.channel.send("You need to mention someone...").then(msg => msg.delete({ timeout : 10000}))
                  if (!member.kickable) return message.channel.send("Unable to kick the user... check my role and perms lol").then(msg => msg.delete({ timeout : 10000}))
                  const reason = args.slice(1).join(" ")
                  if(member) {
                      if(!reason) return member.kick().then(member => {message.channel.send(`**${member.user.tag} was kicked**`);
                  })
  
                  if(reason) return member.kick(reason).then(member => {message.channel.send(`**${member.user.tag} was kicked**\n> Reason - \`${reason}\``);
              })
            }
          }
  
          if (cmd === "ban") {
              if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Missing Permissions... [Ban members]").then(msg => msg.delete({ timeout : 10000}))
                  const member = message.mentions.members.first()
                  if(!member) return message.channel.send("You need to mention someone...").then(msg => msg.delete({ timeout : 10000}))
                  if (!member.bannable) return message.channel.send("Unable to ban the user... check my role and perms lol").then(msg => msg.delete({ timeout : 10000}))
                  const reason = args.slice(1).join(" ")
                  if(member) {
                      if(!reason) return member.ban().then(member => {message.channel.send(`**${member.user.tag} was kicked**`);
                  })
  
                  if(reason) return member.ban(reason).then(member => {message.channel.send(`**${member.user.tag} was kicked**\n> Reason - \`${reason}\``);
              })
            }
          }
  
          if (cmd === "give role") {
              if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send("Missing Permissions... [Manage roles]").then(msg => msg.delete({ timeout : 10000}))
              const member = message.mentions.members.first()
              if (!member) return message.channel.send("You need to mention someone :/").then(msg => msg.delete({ timeout : 10000}))
              const add = args.slice(1).join(" ")
              if (!add) return message.channel.send("You didn't gimme a role lol").then(msg => msg.delete({ timeout : 10000}))
              const roleADD = message.guild.roles.cache.find(role => role.name === add)
              if (!roleADD) return message.channel.send(`A role called \`${add}\` doesn't exists!`).then(msg => msg.delete({ timeout : 10000}))
              if (member.roles.cache.get(roleADD.id)) return message.channel.send("User already has that role ;/").then(msg => msg.delete({ timeout : 10000}))
              member.roles.add(roleADD).then(member => {
                  message.channel.send(`${add} was added to ${member.displayName}`)
              })
          }
  
          if (cmd === "delete") {
              if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send("Missing Permissions... [Manage roles]").then(msg => msg.delete({ timeout : 10000}))
              const member = message.mentions.members.first()
              if (!member) return message.channel.send("You need to mention someone :/").then(msg => msg.delete({ timeout : 10000}))
              const add = args.slice(1).join(" ")
              if (!add) return message.channel.send("You didn't gimme a role lol").then(msg => msg.delete({ timeout : 10000}))
              const roleADD = message.guild.roles.cache.find(role => role.name === add)
              if (!roleADD) return message.channel.send(`A role called \`${add}\` doesn't exists!`).then(msg => msg.delete({ timeout : 10000}))
              if (!member.roles.cache.get(roleADD.id)) return message.channel.send("User doesn't have that role either ways ;/").then(msg => msg.delete({ timeout : 10000}))
              member.roles.remove(roleADD).then(member => {
                  message.channel.send(`${add} was removed from ${member.displayName}`)
              })
          }
  
          if (cmd === "purge") {
              if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Missing Permissions... [Manage messages]").then(msg => msg.delete({ timeout : 10000}))
              const number = args.join(" ")
              if (!number) return message.channel.send("You haven't specified amount of messages to purge :/").then(msg => msg.delete({ timeout : 10000}))
              message.channel.bulkDelete(number).catch(console.error)
              message.channel.send(`Delete ${number} messages!`).then(msg => msg.delete({ timeout : 2000}))
          }
  
          if (cmd === "rps") {
              const choice = [
                  "rock",
                  "paper",
                  "scissors"
              ]
              const msg2 = args.join(" ");
              const res = choice[Math.floor(Math.random() * choice.length)]
  
              let msg = msg2.toLowerCase().trim()
  
              if(msg === "rock" || msg === "paper" || msg === "scissor") {
  
              var first = "You chose " + msg + " and i chose " + res + " so, "
  
              var second;
  
              if(msg === res) second = "its a Draw:neutral_face:!!"
  
              else if(msg === "scissor" && res === "paper") second ="l lose :pensive:"
  
              else if(msg === "paper" && res === "rock") second = "l lose :confused:"
  
              else if(msg === "rock" && res === "scissor") second = "l lose :tired_face:"
  
              else second = "I won :smirk: "
  
              reply = first + second
  
          } else{
  
            reply = `You did not choosed any options :/\n**Usage: ${PREFIX}rps [rock / paper / scissors]**`
          }
  
          message.channel.send(`${reply}`)
        }
      
  })





//leveling


//yt

const { DiscordTogether } = require('discord-together');

client.discordTogether = new DiscordTogether(client);

client.on('message', async message => {
  if (message.content === '=start youtube') {
      if(message.member.voice.channel) {
        client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'youtube').then(async invite => {
          return message.channel.send(`${invite.code}`);
      });
      };
  };
});


client.discordTogether = new DiscordTogether(client);

client.on('message', async message => {
  if (message.content === '=start chess') {
      if(message.member.voice.channel) {
        client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'chess').then(async invite => {
          return message.channel.send(`${invite.code}`);
      });
      };
  };
});


client.on('message', async message => {
if (message.content === '=start poker') {
    if(message.member.voice.channel) {
      client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'poker').then(async invite => {
        return message.channel.send(`${invite.code}`);
    });
    };
};
});
//calculator

const fs = require("fs");
function getSubstringIndex(str, substring, n) {
var times = 0, index = null;
while (times < n && index !== -1) {
    index = str.indexOf(substring, index+substring.length);
    times++;
}
return index;
}

client.on("message", (message) => {
if ((!message.content.startsWith(prefix) && !message.content.toLowerCase().startsWith("math.")) || message.author.bot) return;
if (message.content.startsWith("=invite")) {
message.author.send("https://discord.com/api/oauth2/authorize?client_id=875457394367422465&permissions=8&scope=bot");
message.react("✔");
} else if (message.content.startsWith("=server")) {
message.author.send("https://discord.gg/ywAdN2qGVY");
message.react("✔");
} else if (message.content.toLowerCase().startsWith("math.help")) {
message.channel.send("```math.help     Shows this information.\nmath.ping     Pings me.\nmath.invite   Invites me to your server.\nmath.server   Invites you to my server.\n\n" + config.prefix + "             Prefix.\n+             Add.\n-             Subtract.\n*             Multiply.\n/             Divide.\n%             Modulo.\n\npow(x, y)     Raises x to the power of y.\nsqrt(x)       Square root of x.\nfloor(x)      Rounds x down to nearest integer.\nceil(x)       Rounds x up to nearest integer.```");
} else if (message.content.startsWith(prefix)) {
let calculate = "=" + message.content.toLowerCase().substring(prefix.length);
if (isFinite(calculate.replace(/\=|\+|\-|\*|\/|\÷|\%|\(|\)|\,|\ |math.|pow|sqrt|round|floor|ceiling|ceil|pi|π|euler|absolute|abs|exp|logarithm|log|random|rand|rng/g,''))) {
  calculate = calculate.replace(/ /g, "").replace(/÷/g, "/").replace(/power|pow/g, "Math.pow").replace(/sqrt|squareroot/g, "Math.sqrt").replace(/round/g, "Math.round").replace(/floor/g, "Math.floor").replace(/ceiling|ceil/g, "Math.ceil").replace(/pi|π/g, "Math.PI").replace(/euler/g, "Math.E").replace(/absolute|abs/g, "Math.abs").replace(/exp/g, "Math.exp").replace(/logarithm|log/g, "Math.log").replace(/random|rand|rng/g, "Math.random()");/*.replace(/acos|arccosine/g, "Math.acos").replace(/asin|arcsine/g, "Math.asin").replace(/atan|arctangent|atan1|arctangent1/g, "Math.atan").replace(/atan2|arctangent2/g, "Math.atan2").replace(/cos|cosine/g, "Math.cos").replace(/sin|sine/g, "Math.sin").replace(/tan|tangent/g, "Math.tan")*/;
  if (calculate.replace(/[^%]/g, "").length > 0) {
    for (let i = 0; i < calculate.replace(/[^%]/g, "").length; i++) {
      while ((calculate[getSubstringIndex(calculate, "%", i+1) + 1] == "+" || calculate[getSubstringIndex(calculate, "%", i+1) + 1] == "-" || calculate[getSubstringIndex(calculate, "%", i+1) + 1] == "*" || calculate[getSubstringIndex(calculate, "%", i+1) + 1] == "/" || calculate[getSubstringIndex(calculate, "%", i+1) + 1] == "(" || calculate[getSubstringIndex(calculate, "%", i+1) + 1] == ")" || calculate[getSubstringIndex(calculate, "%", i+1) + 1] == "," || getSubstringIndex(calculate, "%", i+1) + 1 == calculate.length) && calculate.replace(/[^%]/g, "").length > 0) {
        for (let j = getSubstringIndex(calculate, "%", i+1); j > -1; j--) {
          if (calculate[j] == "=" || calculate[j] == "+" || calculate[j] == "-" || calculate[j] == "*" || calculate[j] == "/" || calculate[j] == "(" || calculate[j] == ")" || calculate[j] == ",") {
            calculate = calculate.substring(0, j+1) + (calculate.substring(j+1, getSubstringIndex(calculate, "%", i+1))/100) + calculate.substring(getSubstringIndex(calculate, "%", i+1)+1, calculate.length);
            break;
          }
        }
      }
    }
  }
  calculate =  calculate.replace(/=/g, "");
  if (isFinite(eval(calculate))) message.channel.send(eval(calculate));
}
}
});



client.on('message', message => {
if (message.content === 'MPB') {
  // send back "Pong." to the channel the message was sent in
  message.channel.send(message.channel.send("Sike I lied, I'm back boys! How y'all been? I know I look different, but like I said other things will come and replace, but I don't think no one can replace me, I'm just kidding. So let's do this, hope I can get to a point where I'm really smart."));
}

});


//mute
});







client.login(token);