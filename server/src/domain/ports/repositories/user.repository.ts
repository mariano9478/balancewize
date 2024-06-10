import UserModel from "../../models/user.model";

export interface UserRepository {
  /**
   *
   */
  logIn(email: string, password: string): Promise<UserModel>;
  signIn(user: UserModel): Promise<UserModel>;
  logOut(): Promise<void>;
  getUser(): Promise<UserModel>;
  updateUser(user: UserModel): Promise<UserModel>;
  deleteUser(): Promise<void>;
}
