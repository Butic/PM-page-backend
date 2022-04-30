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
exports.ReportsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const report_entity_1 = require("./entities/report.entity");
const mongoose_2 = require("mongoose");
let ReportsService = class ReportsService {
    constructor(reportModel) {
        this.reportModel = reportModel;
    }
    async create(createReportInput) {
        const createReport = new this.reportModel(createReportInput);
        createReport.dateOfReport = new Date();
        const result = await createReport.save();
        return result;
    }
    async findAll() {
        return this.reportModel.find();
    }
    findOne(_id) {
        return this.reportModel.findById(_id);
    }
    async findByAuthor(author) {
        return await this.reportModel.find({ author });
    }
    update(_id, updateReportInput) {
        console.log(updateReportInput);
        return `This action updates a #${_id} report`;
    }
    remove(_id) {
        return `This action removes a #${_id} report`;
    }
};
ReportsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(report_entity_1.Report.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ReportsService);
exports.ReportsService = ReportsService;
//# sourceMappingURL=reports.service.js.map