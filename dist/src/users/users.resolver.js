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
exports.UsersResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const users_entity_1 = require("./entities/users.entity");
const users_service_1 = require("./users.service");
const create_users_dto_1 = require("./dto/create-users.dto");
const bcrypt = require("bcrypt");
const role_enum_1 = require("../enums/role.enum");
let UsersResolver = class UsersResolver {
    constructor(usersModel, usersService) {
        this.usersModel = usersModel;
        this.usersService = usersService;
    }
    async create(createUsersDto) {
        try {
            const ifUserExists = await this.usersService.findByEmail(createUsersDto.email);
            if (!ifUserExists) {
                createUsersDto.password = await bcrypt.hash(createUsersDto.password, 10);
                const createdUsers = new this.usersModel(createUsersDto);
                const result = createdUsers.save();
                return result;
            }
            else
                throw new Error('User allready exists');
        }
        catch (error) {
            console.error(error);
        }
    }
    async findAll() {
        return await this.usersService.findAll();
    }
    findOneByID(id) {
        return this.usersService.findById(id);
    }
    async findOneByEmail(email) {
        return await this.usersService.findByEmail(email);
    }
    async findAllByRole(role) {
        return await this.usersService.findByRole(role);
    }
    async deleteUserById(_id) {
        return await this.usersService.remove(_id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => users_entity_1.Users, { name: 'CreateNewUser' }),
    __param(0, (0, graphql_1.Args)('usersData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_users_dto_1.CreateUsersDto]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "create", null);
__decorate([
    (0, graphql_1.Query)(() => [users_entity_1.Users], { name: 'findAllUsers' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => users_entity_1.Users, { name: 'findUserByID' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersResolver.prototype, "findOneByID", null);
__decorate([
    (0, graphql_1.Query)(() => users_entity_1.Users, { name: 'findUserByEmail' }),
    __param(0, (0, graphql_1.Args)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "findOneByEmail", null);
__decorate([
    (0, graphql_1.Query)(() => [users_entity_1.Users], { name: 'findAllUsersByRole' }),
    __param(0, (0, graphql_1.Args)('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "findAllByRole", null);
__decorate([
    (0, graphql_1.Mutation)(() => users_entity_1.Users, { name: 'deleteUser' }),
    __param(0, (0, graphql_1.Args)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "deleteUserById", null);
UsersResolver = __decorate([
    (0, graphql_1.Resolver)(() => users_entity_1.Users),
    __param(0, (0, mongoose_2.InjectModel)(users_entity_1.Users.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        users_service_1.UsersService])
], UsersResolver);
exports.UsersResolver = UsersResolver;
//# sourceMappingURL=users.resolver.js.map