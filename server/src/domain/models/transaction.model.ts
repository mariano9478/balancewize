export default class TransactionModel {
  _id: unknown;
  name: string;
  description: string;
  amount: number;
  date: Date;
  type: "income" | "expense" | "transfer";
  frequency: {
    type: "once" | "daily" | "weekly" | "monthly" | "yearly" | "quota";
    iterations?: number;
    on?: Date;
  };
  constructor(
    _id: unknown,
    name: string,
    description: string,
    amount: number,
    date: Date,
    type: "income" | "expense" | "transfer",
    frequency: {
      type: "once" | "daily" | "weekly" | "monthly" | "yearly" | "quota";
      iterations?: number;
      on?: Date;
    },
  ) {
    this._id = _id;
    this.name = name;
    this.description = description;
    this.amount = amount;
    this.date = date;
    this.type = type;
    this.frequency = frequency;
  }
}
