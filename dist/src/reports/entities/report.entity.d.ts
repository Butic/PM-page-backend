/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document, Types } from 'mongoose';
import { ReportStatus } from 'src/enums/reports.enums';
export declare type ReportDocument = Report & Document;
export declare class Report {
    _id: Types.ObjectId;
    projectName: string;
    taskName: string;
    taskDescription: string;
    status: ReportStatus;
    author: string;
    dateOfReport: Date;
    sideInfo: string;
}
export declare const ReportSchema: import("mongoose").Schema<Document<Report, any, any>, import("mongoose").Model<Document<Report, any, any>, any, any, any>, any, any>;
