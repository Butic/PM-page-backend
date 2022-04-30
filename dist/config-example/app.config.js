"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtConstants = exports.corsConfig = exports.whitelist = void 0;
exports.whitelist = [
    'http://localhost:8000',
    'http://localhost:3000',
    'http://localhost:3007',
    undefined,
];
exports.corsConfig = {
    origin: function (origin, callback) {
        if (exports.whitelist.indexOf(origin) !== -1) {
            console.log('allowed cors for:', origin);
            callback(null, true);
        }
        else {
            console.log('blocked cors for:', origin);
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200,
    allowedHeaders: 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe',
    methods: 'GET,PATCH,POST,DELETE,UPDATE,OPTIONS',
    credentials: true,
};
exports.jwtConstants = {
    secret: 'secretKey123',
};
//# sourceMappingURL=app.config.js.map