
module.exports = {
    async execute(interaction) {
        const name=interaction.options.getString('name');
        await interaction.reply('Name: '+name);
    },
};