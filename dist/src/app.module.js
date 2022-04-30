"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const config_1 = require("@nestjs/config");
const database_module_1 = require("./database/database.module");
const invite_module_1 = require("./invite/invite.module");
const service_config_1 = require("../config-example/service.config");
const mongo_config_1 = require("../config-example/mongo.config");
const login_controller_1 = require("./auth/login.controller");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const reports_module_1 = require("./reports/reports.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [mongo_config_1.default, service_config_1.default],
                isGlobal: true,
                envFilePath: ['.env'],
            }),
            database_module_1.DatabaseModule,
            mongoose_1.MongooseModule.forRoot(process.env.mongo_url),
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            invite_module_1.InviteModule,
            reports_module_1.ReportsModule,
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                installSubscriptionHandlers: true,
                autoSchemaFile: 'schema.gql',
                include: [users_module_1.UsersModule, invite_module_1.InviteModule, reports_module_1.ReportsModule],
            }),
        ],
        controllers: [login_controller_1.LoginController],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map