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
exports.CreateReportInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const reports_enums_1 = require("../../enums/reports.enums");
let CreateReportInput = class CreateReportInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'name of project you worked in' }),
    __metadata("design:type", String)
], CreateReportInput.prototype, "projectName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'title of task that you need to do' }),
    __metadata("design:type", String)
], CreateReportInput.prototype, "taskName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'idea that you should implement' }),
    __metadata("design:type", String)
], CreateReportInput.prototype, "taskDescription", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'current status of your task' }),
    __metadata("design:type", String)
], CreateReportInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'your name' }),
    __metadata("design:type", String)
], CreateReportInput.prototype, "author", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, {
        description: 'date of sended reports',
        nullable: true,
    }),
    __metadata("design:type", Date)
], CreateReportInput.prototype, "dateOfReport", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'optional information' }),
    __metadata("design:type", String)
], CreateReportInput.prototype, "sideInfo", void 0);
CreateReportInput = __decorate([
    (0, graphql_1.InputType)()
], CreateReportInput);
exports.CreateReportInput = CreateReportInput;
//# sourceMappingURL=create-report.input.js.map