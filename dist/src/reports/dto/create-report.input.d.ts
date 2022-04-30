import { ReportStatus } from 'src/enums/reports.enums';
export declare class CreateReportInput {
    projectName: string;
    taskName: string;
    taskDescription?: string;
    status: ReportStatus;
    author: string;
    dateOfReport: Date;
    sideInfo?: string;
}
