import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Role } from 'src/enums/role.enum';

export type UsersDocument = Users & Document;

@Schema()
@ObjectType()
export class Users {
  @Field(() => String)
  _id: Types.ObjectId;
  @Prop()
  @Field(() => String)
  email: string;
  @Prop()
  @Field(() => String)
  name: string;
  @Prop()
  @Field(() => String, { defaultValue: '000' })
  password: string;
  @Prop()
  @Field(() => String)
  role: Role;
  @Prop()
  @Field(() => [String], { defaultValue: [], nullable: true })
  stack: string[];
  @Prop()
  @Field(() => String, { nullable: true })
  sideInfo: string;
  @Prop()
  @Field(() => [String], { nullable: true })
  projects: string[];
}

export const UsersSchema = SchemaFactory.createForClass(Users);
