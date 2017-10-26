// Getting Current time for logs
var date = new Date();
var nowtime = date.toLocaleTimeString();
const Discord = require('discord.js'); // Main API
const botSettings = require('./settings.json'); // Settings
const prefix = botSettings.prefix;
const randomFile = require('select-random-file') // Random file API
const client = new Discord.Client(); // Client connection

client.on('ready', async () => {
	console.log('\x1b[32mSpookie Banana started to destroy server!\x1b[0m'); // Executes console log
});

client.on('message', async message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  
  let messageArray = message.content;
  let command = messageArray[0];
  
  
  
  if(message.content === `${prefix}mlps help`) {
    if (message.member.voiceChannel) {
			message.delete() // Delets user command written before executing sound
			message.reply('.mlps help - Get help!' +'\r\n'+ '.mlps applejack - Play Apple Jacks voice' +'\r\n'+ '.mlps pinkiepie - Play Pinkie Pies voice' +'\r\n'+ '.mlps twilightsparkle - Play Twilight Sparkless voice' +'\r\n'+ '.mlps rarity - Play Raritys voice' +'\r\n'+ '.mlps rainbowdash - Play Rainbow Dashes voice' +'\r\n'+ '.mlps fluttershy - Play Fluttershys voice');
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
  
  if(message.content === `${prefix}mlps applejack`) {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join() // Joins voice channel
        .then(connection => {
			message.delete() // Delets user command written before executing sound
			randomFile(botSettings.dirapplejack, (err, file) => { // Gets random file from dir
				const dispatcher = connection.playFile(botSettings.dirapplejack +`${file}`) // Plays s specific sound
				console.log(nowtime + ' ' + message.member + ` played sound of Apple Jack: ${file}`); // Executes console log
				dispatcher.on('end', () => { // Exits voice channel
					connection.disconnect();
				});
        })
		})
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }

  if(message.content === `${prefix}mlps pinkiepie`) {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join() // Joins voice channel
        .then(connection => {
			message.delete() // Delets user command written before executing sound
			randomFile(botSettings.dirpinkiepie, (err, file) => { // Gets random file from dir
				const dispatcher = connection.playFile(botSettings.dirpinkiepie +`${file}`) // Plays s specific sound
				console.log(nowtime + ' ' + message.member + ` played sound of Pinkie Pie: ${file}`); // Executes console log
				dispatcher.on('end', () => { // Exits voice channel
					connection.disconnect();
				});
        })
		})
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }

  if(message.content === `${prefix}mlps twilightsparkle`) {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join() // Joins voice channel
        .then(connection => {
			message.delete() // Delets user command written before executing sound
			randomFile(botSettings.dirtwilight, (err, file) => { // Gets random file from dir
				const dispatcher = connection.playFile(botSettings.dirtwilight +`${file}`) // Plays s specific sound
				console.log(nowtime + ' ' + message.member + ` played sound of Twilight Sparkle: ${file}`); // Executes console log
				dispatcher.on('end', () => { // Exits voice channel
					connection.disconnect();
				});
        })
		})
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
  
    if(message.content === `${prefix}mlps rarity`) {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join() // Joins voice channel
        .then(connection => {
			message.delete() // Delets user command written before executing sound
			randomFile(botSettings.dirrarity, (err, file) => { // Gets random file from dir
				const dispatcher = connection.playFile(botSettings.dirrarity +`${file}`) // Plays s specific sound
				console.log(nowtime + ' ' + message.member + ` played sound of Rarity: ${file}`); // Executes console log
				dispatcher.on('end', () => { // Exits voice channel
					connection.disconnect();
				});
        })
		})
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
  
      if(message.content === `${prefix}mlps fluttershy`) {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join() // Joins voice channel
        .then(connection => {
			message.delete() // Delets user command written before executing sound
			randomFile(botSettings.dirfluttershy, (err, file) => { // Gets random file from dir
				const dispatcher = connection.playFile(botSettings.dirfluttershy +`${file}`) // Plays s specific sound
				console.log(nowtime + ' ' + message.member + ` played sound of FlutterShy: ${file}`); // Executes console log
				dispatcher.on('end', () => { // Exits voice channel
					connection.disconnect();
				});
        })
		})
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
  
        if(message.content === `${prefix}mlps rainbowdash`) {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join() // Joins voice channel
        .then(connection => {
			message.delete() // Delets user command written before executing sound
			randomFile(botSettings.dirrbd, (err, file) => { // Gets random file from dir
				const dispatcher = connection.playFile(botSettings.dirrbd +`${file}`) // Plays s specific sound
				console.log(nowtime + ' ' + message.member + ` played sound of Rainbow Dash: ${file}`); // Executes console log
				dispatcher.on('end', () => { // Exits voice channel
					connection.disconnect();
				});
        })
		})
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
});



/// FUNNY
client.on('message', message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;



});


client.login(botSettings.token);