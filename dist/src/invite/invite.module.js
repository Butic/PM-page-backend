"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InviteModule = void 0;
const common_1 = require("@nestjs/common");
const invite_service_1 = require("./invite.service");
const mongoose_1 = require("@nestjs/mongoose");
const invite_entity_1 = require("./entities/invite.entity");
const invite_resolver_1 = require("./invite.resolver");
let InviteModule = class InviteModule {
};
InviteModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Invite', schema: invite_entity_1.InviteSchema }]),
        ],
        controllers: [],
        providers: [invite_service_1.InviteService, invite_resolver_1.InviteResolver],
        exports: [invite_service_1.InviteService],
    })
], InviteModule);
exports.InviteModule = InviteModule;
//# sourceMappingURL=invite.module.js.map