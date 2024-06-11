import TransactionModel from "@src/domain/models/transaction.model";
import { Transaction } from "@src/infrastructure/adapters/entity/transaction.entity";

export const TransactionMapper = {
  toDomain(transactionMongo: Transaction): TransactionModel {
    return new TransactionModel(
      transactionMongo._id,
      transactionMongo.name,
      transactionMongo.description,
      transactionMongo.amount,
      transactionMongo.date,
      transactionMongo.type,
      transactionMongo.frequency,
    );
  },

  toDomains(transactionsMongo: Transaction[]): TransactionModel[] {
    return transactionsMongo.map(transactionMongo =>
      this.toDomain(transactionMongo),
    );
  },
};
