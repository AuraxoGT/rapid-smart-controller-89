const { handleApplication } = require('../commands/startApplication');
const { questions } = require('../utils/questions');

const handleInteraction = async (interaction) => {
  if (interaction.isButton() && interaction.customId === 'start_application') {
    await interaction.deferUpdate();
    await interaction.user.send('Welcome to the application process! Let\'s get started.');

    for (let i = 0; i < questions.length; i++) {
      const question = questions[i];
      await interaction.user.send(question);
    }

    return;
  }

  if (interaction.isCommand()) {
    await handleApplication(interaction);
  }
};

module.exports = { handleInteraction };