// En tu archivo actor.entity.ts
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

import { Transaction } from "./transaction.entity";

export type UserDocument = Account & mongoose.Document;

@Schema()
export class Account {
  _id: unknown;
  @Prop()
  name!: string;
  @Prop()
  type!: "bank" | "credit" | "investment";
  @Prop()
  balance!: number;
  @Prop()
  creditLimit!: number;
  @Prop()
  bank!: string;
  @Prop()
  issueDate!: Date;
  @Prop()
  transactions!: Transaction[];
}

export const AccountSchema = SchemaFactory.createForClass(Account);
