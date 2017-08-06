module.exports = {
    name: "hooker",
    description: "A pretty lady that can visit someone at night, making them unable to do anything.",
    frequencies: [0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3],
    alignment: "mafia",
    nightAbility (message, user, target, game) {
        if (! target.immunities.roleblock) {
            message.author.send(`You visited ${game.getNick(target)}.`);
        } else {
            message.author.send(`You visited ${game.getNick(target)} but they ignored you.`);
        }
    },
    priority: 0,
    immunities: {
        roleblock: true
    }
};