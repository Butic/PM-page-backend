"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InviteResolver = void 0;
const invite_service_1 = require("./invite.service");
const create_invite_dto_1 = require("./dto/create-invite.dto");
const graphql_1 = require("@nestjs/graphql");
const invite_entity_1 = require("./entities/invite.entity");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let InviteResolver = class InviteResolver {
    constructor(inviteModel, inviteService) {
        this.inviteModel = inviteModel;
        this.inviteService = inviteService;
    }
    async create(createInviteDto) {
        return await this.inviteService.create(createInviteDto);
    }
    async findOneById(id) {
        const response = await this.inviteService.findById(id);
        return response
            ? response.expiryDate > Date.now()
                ? response
                : new Error('We found your invitation, but its expired')
            : new Error('Current invitation does not exists');
    }
    async findAllInvitations() {
        return await this.inviteService.findAll();
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => invite_entity_1.Invite, { name: 'CreateInvitation' }),
    __param(0, (0, graphql_1.Args)('invitationData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_invite_dto_1.CreateInviteDto]),
    __metadata("design:returntype", Promise)
], InviteResolver.prototype, "create", null);
__decorate([
    (0, graphql_1.Query)(() => invite_entity_1.Invite, { name: 'findInvitiationById' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InviteResolver.prototype, "findOneById", null);
__decorate([
    (0, graphql_1.Query)(() => [invite_entity_1.Invite], { name: 'findAllInvitations' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InviteResolver.prototype, "findAllInvitations", null);
InviteResolver = __decorate([
    (0, graphql_1.Resolver)(() => invite_entity_1.Invite),
    __param(0, (0, mongoose_1.InjectModel)(invite_entity_1.Invite.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        invite_service_1.InviteService])
], InviteResolver);
exports.InviteResolver = InviteResolver;
//# sourceMappingURL=invite.resolver.js.map