const generator = require("generator-password");

const password = generator.generator({
    length : 10,
    number : true
});

// 'uEyMTw32v9'
module.exports = password