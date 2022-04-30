import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ReportStatus } from 'src/enums/reports.enums';

export type ReportDocument = Report & Document;

@Schema()
@ObjectType()
export class Report {
  @Field(() => String)
  _id: Types.ObjectId;
  @Prop()
  @Field(() => String)
  projectName: string;
  @Prop()
  @Field(() => String)
  taskName: string;
  @Prop()
  @Field(() => String, { nullable: true })
  taskDescription: string;
  @Prop()
  @Field(() => String)
  status: ReportStatus;
  @Prop()
  @Field(() => String)
  author: string;
  @Prop()
  @Field(() => Date, { nullable: true })
  dateOfReport: Date;
  @Prop()
  @Field(() => String, { nullable: true })
  sideInfo: string;
}

export const ReportSchema = SchemaFactory.createForClass(Report);
