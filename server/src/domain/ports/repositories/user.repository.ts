import UserDto from "@src/infrastructure/dtos/user.dto";

import UserModel from "../../models/user.model";

export interface UserRepository {
  /**
   *
  logOut(): Promise<void>;
  getUser(): Promise<UserModel>;
  updateUser(user: UserModel): Promise<UserModel>;
  deleteUser(): Promise<void>;
  */
  logIn(email: string, password: string): Promise<UserModel>;
  signIn(user: UserDto): Promise<UserModel>;
  whoami(id: string): Promise<UserModel>;
}
