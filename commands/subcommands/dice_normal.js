
module.exports = {
    async execute(interaction) {
        const roll=interaction.options.getInteger('roll');
        const times=interaction.options.getInteger('times');
        await interaction.reply('Times:'+times+'  Roll: '+roll);
    },
};