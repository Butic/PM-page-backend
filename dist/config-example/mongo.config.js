"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('mongo', () => ({
    url: process.env.mongo_url ||
        'mongodb+srv://User:User@todo-list.xof4m.mongodb.net/users?retryWrites=true&w=majority',
}));
//# sourceMappingURL=mongo.config.js.map