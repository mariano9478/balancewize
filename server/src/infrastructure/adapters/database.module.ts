import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { Account, AccountSchema } from "./entity/account.entity";
import { Transaction, TransactionSchema } from "./entity/transaction.entity";
import { User, UserSchema } from "./entity/user.entity";

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017", {
      dbName: "coinwize",
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }]),
    MongooseModule.forFeature([
      { name: Transaction.name, schema: TransactionSchema },
    ]),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
