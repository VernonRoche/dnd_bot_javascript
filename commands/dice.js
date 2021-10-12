const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dice')
        .setDescription('Throws a dice')
        .addSubcommand(subcommand =>
            subcommand
                .setName('normal')
                .setDescription('Rolls a normal dice roll')
                .addIntegerOption(option =>
                    option.setName('times')
                        .setDescription('how many times to throw the dice')
                        .setRequired(true))
                .addIntegerOption(option =>
                    option.setName('roll')
                        .setDescription('the type of dice to be rolled')
                        .setRequired(true))
        )
        .addSubcommand( subcommand =>
            subcommand
                .setName('skill')
                .setDescription('Rolls a skill roll')
                .addStringOption(option =>
                    option
                        .setName('name')
                        .setDescription('Name of the character')
                        .setRequired(true)),
        ),
    async execute(interaction) {
        const commands = {
            skill: require('./subcommands/dice_skill'),
            normal: require('./subcommands/dice_normal'),
        };
        const toExecute = commands[interaction.options.getSubcommand()];
        toExecute.execute(interaction);
    },
};