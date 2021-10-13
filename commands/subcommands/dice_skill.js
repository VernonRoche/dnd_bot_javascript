const dice_roller = require('../../utils/dice_roller');

module.exports = {
    async execute(interaction) {
        const name=interaction.options.getString('name');
        await interaction.deferReply({ ephemeral: true });
        const dice_roll=dice_roller.dice_roll(20);
        await interaction.editReply(name+' rolled: '+dice_roll);
    },
};