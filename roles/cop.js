module.exports = {
    name: "cop",
    description: "A police officer that can investigate someone at night, discovering their alignment.",
    frequencies: [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2],
    alignment: "town",
    nightAbility (message, user, target, game) {
        if (user.roleblocked) {
            message.author.send(`You were visited by a pretty lady so you didn't do anything!`);
            return;
        }
        message.author.send(`You investigated ${game.getNick(target)} and discovered that he is sided with the ${target.role.alignment}.`);
    },
    priority: 3,
    immunities: {}
};