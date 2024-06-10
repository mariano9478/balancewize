import { IAccountModel } from "../../models/account.model";
export interface AccountRepository {
  /**
   *
   */
  createAccount(account: IAccountModel): Promise<IAccountModel>;
  getAccount(accountId: unknown): Promise<IAccountModel>;
  updateAccount(account: IAccountModel): Promise<IAccountModel>;
  deleteAccount(accountId: unknown): Promise<void>;
}
