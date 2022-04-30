import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { Role } from 'src/enums/role.enum';
export type InviteDocument = Invite & Document;

@Schema()
@ObjectType()
export class Invite {
  @Field(() => String)
  _id: Types.ObjectId;
  @Field()
  @Prop()
  email: string;
  @Field()
  @Prop()
  role: Role;
  @Field({ nullable: true })
  @Prop()
  expiryDate: number;
}
export const InviteSchema = SchemaFactory.createForClass(Invite);
