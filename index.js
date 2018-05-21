// Getting Current time for logs
var date = new Date();
var nowtime = date.toLocaleTimeString();
const Discord = require('discord.js'); // Main API
const botSettings = require('./settings.json'); // Settings
const prefix = botSettings.prefix;
const randomFile = require('select-random-file') // Random file API
const client = new Discord.Client(); // Client connection

const PoniesCMDS = [
  "applejack",
  "cmc",
  "fluttershy",
  "nightmaremoon",
  "other",
  "pinkiepie",
  "celestia",
  "kadense",
  "luna",
  "chrysalis",
  "rainbowdash",
  "rarity",
  "dazzlings",
  "twilightsparkle",
  "zecora"
];

client.on('ready', async () => {
  console.log('\x1b[32mBOT is online and ready to scream!\x1b[0m'); // Executes console log
});

client.on('message', async message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  let pony = args[0];
  console.log(pony);
  console.log(PoniesCMDS[pony]);
  console.log(PoniesCMDS.includes(pony));
  const soundsfolder = './sounds';


  if (message.content === `${prefix} help`) {
    if (message.member.voiceChannel) {
      message.delete() // Delets user command written before executing sound
      const allCMDSEmbed = new Discord.RichEmbed()
        .setTitle("All commands of bot:")
        .setColor("#333333")
        .setTimestamp()
        .addBlankField(true)
      //.addField("```fix\n" + prefix + 'help' + "\n```", false)
      for (const i of PoniesCMDS) {
        //console.log(i);
        var allcommands = `${prefix} ${i}`
        console.log(allcommands);
        allCMDSEmbed.addField(i, "```fix\n" + allcommands + "\n```", false)
      }
      console.log(allCMDSEmbed);
      await message.channel.send(`${message.author.toString()}, all commands:`, allCMDSEmbed);
      return;
    } else {
      await message.channel.send(`${message.author.toString()}, You need to join a voice channel first!`);
      return;
    }
  }
	
  if (PoniesCMDS.includes(pony) !== false) {
    if (message.content == `${prefix} ${pony}`) {
      if (message.member.voiceChannel) {
        message.member.voiceChannel.join() // Joins voice channel
          .then(connection => {
            message.delete() // Delets user command written before executing sound
            randomFile(`sounds/${pony}`, (err, file) => { // Gets random file from dir
              const dispatcher = connection.playFile(`sounds/${pony}/${file}`) // Plays s specific sound
              console.log(nowtime + ' ' + message.member + ` played sound of ${pony}: ${file}`); // Executes console log
              dispatcher.on('end', () => { // Exits voice channel
                connection.disconnect();
              });
            })
          })
          .catch(console.log);
      } else {
        await message.channel.send(`${message.author.toString()}, You need to join a voice channel first!`);
      }
    }
  } else {
    await message.channel.send(`${message.author.toString()}, Are you sure that you have entered right value?`);
  }

});

client.login(botSettings.token);
