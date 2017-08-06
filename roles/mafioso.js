module.exports = {
    name: "mafioso",
    description: "A member of the mafia that can vote on someone to kill.",
    frequencies: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2],
    alignment: "mafia",
    nightAbility (message, user, target, game) {
        if (user.roleblocked) {
            message.author.send(`You were visited by a pretty lady so you didn't do anything!`);
            return;
        }
        message.author.send(`You attacked ${game.getNick(target)}${target.healed ? " but he was healed." : "."}`);
        if (!target.healed) target.attacked = "mafia";
    },
    priority: 2,
    immunities: {}
};