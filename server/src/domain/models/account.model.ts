import TransactionModel from "./transaction.model";
export interface IAccountModel {
  _id: unknown;
  name: string;
  type: "bank" | "credit" | "investment";
  balance: number;
  transactions: TransactionModel[];

  setTransactions(transactions: TransactionModel[]): void;
  getTransactions(): TransactionModel[] | undefined;
}

export class BankAccountModel implements IAccountModel {
  public _id: unknown;
  public name: string;
  public type = "bank" as const;
  public balance: number;
  public bank: string;
  public transactions!: TransactionModel[];

  constructor(_id: unknown, name: string, balance: number, bank: string) {
    this._id = _id;
    this.name = name;
    this.balance = balance;
    this.bank = bank;
  }

  setTransactions(transactions: TransactionModel[]): void {
    this.transactions = transactions;
  }
  getTransactions(): TransactionModel[] | undefined {
    return this.transactions;
  }
}

export class CreditAccountModel implements IAccountModel {
  public _id: unknown;
  public name: string;
  public type = "credit" as const;
  public balance: number;
  public creditLimit: number;
  public issuaDate: Date;
  public transactions!: TransactionModel[];

  constructor(
    _id: unknown,
    name: string,
    balance: number,
    creditLimit: number,
    issueDate: Date,
  ) {
    this._id = _id;
    this.name = name;
    this.balance = balance;
    this.creditLimit = creditLimit;
    this.issuaDate = issueDate;
  }

  setTransactions(transactions: TransactionModel[]): void {
    this.transactions = transactions;
  }
  getTransactions(): TransactionModel[] | undefined {
    return this.transactions;
  }
}
