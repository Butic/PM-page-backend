import { Field, InputType } from '@nestjs/graphql';
import { Role } from 'src/enums/role.enum';

@InputType()
export class CreateUsersDto {
  @Field(() => String)
  email: string;
  @Field(() => String)
  name: string;
  @Field(() => String)
  password: string;
  @Field(() => String)
  role: Role;
  @Field(() => [String], { nullable: true })
  stack?: string[];
  @Field(() => String, { nullable: true })
  sideInfo: string;
  @Field(() => [String], { nullable: true })
  projects: string[];
}
