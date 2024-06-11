import { Inject, Injectable } from "@nestjs/common";

import User from "../../../domain/models/user.model";
import { UserRepository } from "../../../domain/ports/repositories/user.repository";

@Injectable()
export default class WhoAmIUseCase {
  constructor(
    @Inject("UserRepository") private userRepository: UserRepository,
  ) {}

  public handler(id: string): Promise<User> {
    return this.userRepository.whoami(id);
  }
}
