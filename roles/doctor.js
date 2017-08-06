module.exports = {
    name: "doctor",
    description: "A medic that can heal someone at night, saving them from death.",
    frequencies: [0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2],
    alignment: "town",
    nightAbility (message, user, target, game) {
        if (user.roleblocked) {
            message.author.send(`You were visited by a pretty lady so you didn't do anything!`);
            return;
        }
        target.healed = true;
        message.author.send(`You healed ${game.getNick(target)}.`);
    },
    priority: 1,
    immunities: {}
};