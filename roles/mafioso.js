module.exports = {
    frequencies: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2],
    alignment: "mafia",
    nightAbility (message, user, target, game) {
        if (user.roleblocked) {
            message.author.send(`You were visited by a pretty lady so you didn't do anything!`);
            return;
        }
        if (target.healed) {
            message.author.send(`You attacked ${game.getNick(target)}${target.healed ? " but he was healed." : "."}`);
        } else {
            target.attacked = "mafia";
        }
    },
    priority: 2,
    immunities: {}
};