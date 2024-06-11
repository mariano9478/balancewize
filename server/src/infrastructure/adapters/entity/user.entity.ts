// En tu archivo actor.entity.ts
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

import { Account } from "./account.entity";

export type UserDocument = User & mongoose.Document;

@Schema()
export class User {
  _id: unknown;
  @Prop()
  name!: string;
  @Prop()
  email!: string;
  @Prop()
  password!: string;
  @Prop()
  phone!: number;
  @Prop()
  accounts!: Account[];
}

export const UserSchema = SchemaFactory.createForClass(User);
