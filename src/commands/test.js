const path = require("path");

const s = `commands${path.sep}${path.basename(__filename)}`;
const log = signale.scope(s);

module.exports = {
    cmd: {
        name: "test",
        usage: "你想干啥[usage]",
        description: "我也不知道[description]",
        options: [
            {
                pattern: "-w, --watch",
                desc: "I watch you"
            }
        ]
    },
    exec: (pwd, options) => {
        log.star(pwd, options);
    }
};
