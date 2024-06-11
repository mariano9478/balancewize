import {
  BankAccountModel,
  CreditAccountModel,
  IAccountModel,
} from "@src/domain/models/account.model";
import { Account } from "@src/infrastructure/adapters/entity/account.entity";

import { TransactionMapper } from "./transaction.mapper";

export const AccountMapper = {
  toDomain(accountMongo: Account): IAccountModel {
    let account: IAccountModel;
    switch (accountMongo.type) {
      case "bank": {
        account = new BankAccountModel(
          accountMongo._id,
          accountMongo.name,
          accountMongo.balance,
          accountMongo.bank,
        );
        break;
      }
      case "credit": {
        account = new CreditAccountModel(
          accountMongo._id,
          accountMongo.name,
          accountMongo.balance,
          accountMongo.creditLimit,
          accountMongo.issueDate,
        );
        break;
      }
      default: {
        throw new Error("Invalid account type");
      }
    }
    if (accountMongo.transactions) {
      account.setTransactions(
        TransactionMapper.toDomains(accountMongo.transactions),
      );
    }
    return account; // Add this line to return the account
  },

  toDomains(accountsMongo: Account[]): IAccountModel[] {
    return accountsMongo.map(accountMongo => this.toDomain(accountMongo));
  },
};
