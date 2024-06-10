import { Inject, Injectable } from "@nestjs/common";

import Matter from "../../../domain/models/matter.model";
import { MatterRepository } from "../../../domain/ports/repositories/user.repository";

@Injectable()
export default class GetMatterByIdUseCase {
  constructor(
    @Inject("MatterRepository") private matterRepository: MatterRepository,
  ) {}

  public handler(matterId: string): Promise<Matter> {
    return this.matterRepository.getById(matterId);
  }
}
