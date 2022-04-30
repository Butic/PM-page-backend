import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateInviteDto {
  @Field(() => String)
  email: string;
  @Field(() => String)
  role: string;
  @Field(() => Number, { nullable: true })
  expiryDate: number;
}
