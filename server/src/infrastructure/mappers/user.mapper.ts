import UserModel from "@src/domain/models/user.model";
import { User } from "@src/infrastructure/adapters/entity/user.entity";

import { AccountMapper } from "./account.mapper";
export const UserMapper = {
  toDomain(userMongo: User): UserModel {
    const user: UserModel = new UserModel(
      userMongo._id,
      userMongo.name,
      userMongo.email,
      userMongo.phone,
    );
    if (userMongo.accounts) {
      user.setAccounts(AccountMapper.toDomains(userMongo.accounts));
    }
    return user;
  },

  toDomains(usersMongo: User[]): UserModel[] {
    return usersMongo.map(userMongo => this.toDomain(userMongo));
  },
};
