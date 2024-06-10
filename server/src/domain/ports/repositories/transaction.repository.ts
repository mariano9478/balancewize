import TransactionModel from "@src/domain/models/transaction.model";

export interface ITransactionRepository {
  /**
   *
   */
  createTransaction(transaction: TransactionModel): Promise<TransactionModel>;
  getTransaction(transactionId: unknown): Promise<TransactionModel>;
  updateTransaction(transaction: TransactionModel): Promise<TransactionModel>;
  deleteTransaction(transactionId: unknown): Promise<void>;
}
