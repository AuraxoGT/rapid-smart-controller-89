const { SlashCommandBuilder, MessageActionRow, MessageButton } = require('@discordjs/builders');

const startApplicationCommand = new SlashCommandBuilder()
  .setName('apply')
  .setDescription('Start the application process');

const handleApplication = async (interaction) => {
  if (!interaction.isCommand() || interaction.commandName !== 'apply') return;

  const row = new MessageActionRow()
    .addComponents(
      new MessageButton()
        .setCustomId('start_application')
        .setLabel('Start Application')
        .setStyle('PRIMARY')
    );

  await interaction.reply({ content: 'Click the button to start your application!', components: [row], ephemeral: true });
};

module.exports = {
  startApplicationCommand: startApplicationCommand.toJSON(),
  handleApplication,
};