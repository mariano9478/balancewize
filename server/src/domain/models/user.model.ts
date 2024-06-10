import { IAccountModel } from "./account.model";
export default class UserModel {
  public _id: unknown;
  public name: string;
  public email: string;
  public phone: number;
  public accounts!: IAccountModel[];

  constructor(_id: unknown, name: string, email: string, phone: number) {
    this._id = _id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }

  setAccounts(accounts: IAccountModel[]): void {
    this.accounts = accounts;
  }
  getAccounts(): IAccountModel[] | undefined {
    return this.accounts;
  }
}
