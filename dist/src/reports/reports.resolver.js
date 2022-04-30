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
exports.ReportsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const reports_service_1 = require("./reports.service");
const report_entity_1 = require("./entities/report.entity");
const create_report_input_1 = require("./dto/create-report.input");
const update_report_input_1 = require("./dto/update-report.input");
let ReportsResolver = class ReportsResolver {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    createReport(createReportInput) {
        return this.reportsService.create(createReportInput);
    }
    findAll() {
        return this.reportsService.findAll();
    }
    findOne(id) {
        return this.reportsService.findOne(id);
    }
    findByAuthor(author) {
        console.log(author);
        return this.reportsService.findByAuthor(author);
    }
    updateReport(updateReportInput) {
        return this.reportsService.update(updateReportInput._id, updateReportInput);
    }
    removeReport(id) {
        return this.reportsService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => report_entity_1.Report),
    __param(0, (0, graphql_1.Args)('createReportInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_report_input_1.CreateReportInput]),
    __metadata("design:returntype", void 0)
], ReportsResolver.prototype, "createReport", null);
__decorate([
    (0, graphql_1.Query)(() => [report_entity_1.Report], { name: 'reports' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReportsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => report_entity_1.Report, { name: 'report' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReportsResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Query)(() => [report_entity_1.Report], { name: 'authorsReports' }),
    __param(0, (0, graphql_1.Args)('author')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReportsResolver.prototype, "findByAuthor", null);
__decorate([
    (0, graphql_1.Mutation)(() => report_entity_1.Report),
    __param(0, (0, graphql_1.Args)('updateReportInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_report_input_1.UpdateReportInput]),
    __metadata("design:returntype", void 0)
], ReportsResolver.prototype, "updateReport", null);
__decorate([
    (0, graphql_1.Mutation)(() => report_entity_1.Report),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReportsResolver.prototype, "removeReport", null);
ReportsResolver = __decorate([
    (0, graphql_1.Resolver)(() => report_entity_1.Report),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsResolver);
exports.ReportsResolver = ReportsResolver;
//# sourceMappingURL=reports.resolver.js.map