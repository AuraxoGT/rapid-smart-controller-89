require('dotenv').config();
const { Client, Intents } = require('discord.js');
const { startApplicationCommand } = require('./commands/startApplication');
const { handleInteraction } = require('./events/interactionCreate');

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES],
  partials: ['CHANNEL']
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
  client.application.commands.set([startApplicationCommand], process.env.GUILD_ID);
});

client.on('interactionCreate', handleInteraction);

client.login(process.env.DISCORD_TOKEN);