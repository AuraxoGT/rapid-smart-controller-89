const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

const startApplicationCommand = new SlashCommandBuilder()
  .setName('apply')
  .setDescription('Start the application process');

const handleApplication = async (interaction) => {
  if (!interaction.isCommand() || interaction.commandName !== 'apply') return;

  const embed = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Start Your Application')
    .setDescription('Click the button below to start the application process.')
    .setTimestamp();

  const row = new MessageActionRow()
    .addComponents(
      new MessageButton()
        .setCustomId('start_application')
        .setLabel('Start Application')
        .setStyle('PRIMARY'),
      new MessageButton()
        .setCustomId('end_application')
        .setLabel('End Application')
        .setStyle('DANGER')
    );

  await interaction.reply({ embeds: [embed], components: [row], ephemeral: true });
};

module.exports = {
  startApplicationCommand: startApplicationCommand.toJSON(),
  handleApplication,
};