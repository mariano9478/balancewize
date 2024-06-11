import { Inject, Injectable } from "@nestjs/common";

import User from "../../../domain/models/user.model";
import { UserRepository } from "../../../domain/ports/repositories/user.repository";

@Injectable()
export default class LogInUserUseCase {
  constructor(
    @Inject("UserRepository") private userRepository: UserRepository,
  ) {}

  public handler(email: string, password: string): Promise<User> {
    return this.userRepository.logIn(email, password);
  }
}
