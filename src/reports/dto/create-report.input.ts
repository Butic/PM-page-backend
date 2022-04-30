import { InputType, Field } from '@nestjs/graphql';
import { ReportStatus } from 'src/enums/reports.enums';

@InputType()
export class CreateReportInput {
  @Field(() => String, { description: 'name of project you worked in' })
  projectName: string;
  @Field(() => String, { description: 'title of task that you need to do' })
  taskName: string;
  @Field(() => String, { description: 'idea that you should implement' })
  taskDescription?: string;
  @Field(() => String, { description: 'current status of your task' })
  status: ReportStatus;
  @Field(() => String, { description: 'your name' })
  author: string;
  @Field(() => Date, {
    description: 'date of sended reports',
    nullable: true,
  })
  dateOfReport: Date;
  @Field(() => String, { description: 'optional information' })
  sideInfo?: string;
}
