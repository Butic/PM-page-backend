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
exports.InviteService = exports.testEmail = exports.emailTo = exports.emailFrom = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const invite_entity_1 = require("./entities/invite.entity");
const nodemailer = require("nodemailer");
const invitation_config_1 = require("../../config-example/invitation.config");
exports.emailFrom = 'pm.nvrsk.app@mail.ru';
exports.emailTo = 'kovalev.exceedteam@gmail.com';
exports.testEmail = '1111@mail.ru';
const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    logger: true,
    auth: {
        user: exports.emailFrom,
        pass: 'CG2cZsV5KakyY7jfYfcT',
    },
});
let InviteService = class InviteService {
    constructor(inviteModel) {
        this.inviteModel = inviteModel;
    }
    async create(createInviteDto) {
        try {
            const createdInvite = new this.inviteModel(createInviteDto);
            createdInvite.expiryDate = Date.now() + 60 * 1000 * 60;
            const result = await createdInvite.save();
            console.log(result);
            await transporter.sendMail((0, invitation_config_1.emailConfig)(result));
            return result;
        }
        catch (error) {
            console.error(error);
        }
    }
    async findById(id) {
        try {
            return this.inviteModel.findById(id);
        }
        catch (error) {
            console.error(error);
        }
    }
    async findAll() {
        try {
            return this.inviteModel.find();
        }
        catch (error) {
            console.error(error);
        }
    }
    async update(updateInviteDto) {
        try {
            return this.inviteModel.findOneAndUpdate(updateInviteDto);
        }
        catch (error) {
            console.error(error);
        }
    }
};
InviteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(invite_entity_1.Invite.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], InviteService);
exports.InviteService = InviteService;
//# sourceMappingURL=invite.service.js.map