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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsersDto = void 0;
const graphql_1 = require("@nestjs/graphql");
const role_enum_1 = require("../../enums/role.enum");
let CreateUsersDto = class CreateUsersDto {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateUsersDto.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateUsersDto.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateUsersDto.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateUsersDto.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], CreateUsersDto.prototype, "stack", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CreateUsersDto.prototype, "sideInfo", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], CreateUsersDto.prototype, "projects", void 0);
CreateUsersDto = __decorate([
    (0, graphql_1.InputType)()
], CreateUsersDto);
exports.CreateUsersDto = CreateUsersDto;
//# sourceMappingURL=create-users.dto.js.map