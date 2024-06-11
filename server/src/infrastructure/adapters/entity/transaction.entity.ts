// En tu archivo actor.entity.ts
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

export type TransactionDocument = Transaction & mongoose.Document;

@Schema()
export class Transaction {
  _id: unknown;
  @Prop()
  name!: string;
  @Prop()
  description!: string;
  @Prop()
  amount!: number;
  @Prop()
  date!: Date;
  @Prop()
  type!: "income" | "expense" | "transfer";
  @Prop({ type: Object })
  frequency!: {
    type: "once" | "daily" | "weekly" | "monthly" | "yearly" | "quota";
    iterations?: number;
    on?: Date;
  };
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
