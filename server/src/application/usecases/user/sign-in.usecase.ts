import { Inject, Injectable } from "@nestjs/common";

import UserDto from "@src/infrastructure/dtos/user.dto";

import User from "../../../domain/models/user.model";
import { UserRepository } from "../../../domain/ports/repositories/user.repository";

@Injectable()
export default class SignInUserUseCase {
  constructor(
    @Inject("UserRepository") private userRepository: UserRepository,
  ) {}

  public handler(user: UserDto): Promise<User> {
    return this.userRepository.signIn(user);
  }
}
