import { CreateReportInput } from './create-report.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateReportInput extends PartialType(CreateReportInput) {
  @Field(() => String)
  _id: string;
}
