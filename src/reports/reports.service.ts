import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateReportInput } from './dto/create-report.input';
import { UpdateReportInput } from './dto/update-report.input';
import { Report, ReportDocument } from './entities/report.entity';
import { Model } from 'mongoose';

@Injectable()
export class ReportsService {
  constructor(
    @InjectModel(Report.name) private reportModel: Model<ReportDocument>,
  ) {}

  async create(createReportInput: CreateReportInput) {
    const createReport = new this.reportModel(createReportInput);
    createReport.dateOfReport = new Date();
    const result = await createReport.save();
    return result;
  }

  async findAll() {
    return this.reportModel.find();
  }

  findOne(_id: string) {
    return this.reportModel.findById(_id);
  }

  async findByAuthor(author: string) {
    return await this.reportModel.find({ author });
  }

  update(_id: string, updateReportInput: UpdateReportInput) {
    console.log(updateReportInput);
    return `This action updates a #${_id} report`;
  }

  remove(_id: string) {
    return `This action removes a #${_id} report`;
  }
}
