/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose" />
import { ReportsService } from './reports.service';
import { Report } from './entities/report.entity';
import { CreateReportInput } from './dto/create-report.input';
import { UpdateReportInput } from './dto/update-report.input';
export declare class ReportsResolver {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    createReport(createReportInput: CreateReportInput): Promise<Report & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findAll(): Promise<(Report & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findOne(id: string): import("mongoose").Query<Report & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, Report & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, import("./entities/report.entity").ReportDocument>;
    findByAuthor(author: string): Promise<(Report & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    updateReport(updateReportInput: UpdateReportInput): string;
    removeReport(id: string): string;
}
