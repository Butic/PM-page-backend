"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('service', () => ({
    serviceName: 'exceed-portal',
    port: process.env.http_port || '3007',
}));
//# sourceMappingURL=service.config.js.map