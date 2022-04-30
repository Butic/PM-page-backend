/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { CreateReportInput } from './dto/create-report.input';
import { UpdateReportInput } from './dto/update-report.input';
import { Report, ReportDocument } from './entities/report.entity';
import { Model } from 'mongoose';
export declare class ReportsService {
    private reportModel;
    constructor(reportModel: Model<ReportDocument>);
    create(createReportInput: CreateReportInput): Promise<Report & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findAll(): Promise<(Report & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findOne(_id: string): import("mongoose").Query<Report & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, Report & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, ReportDocument>;
    findByAuthor(author: string): Promise<(Report & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    update(_id: string, updateReportInput: UpdateReportInput): string;
    remove(_id: string): string;
}
