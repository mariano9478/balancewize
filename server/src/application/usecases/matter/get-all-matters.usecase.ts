import { Inject, Injectable } from "@nestjs/common";

import Matter from "../../../domain/models/matter.model";
import { MatterRepository } from "../../../domain/ports/repositories/user.repository";

@Injectable()
export default class GetAllMattersUseCase {
  constructor(
    @Inject("MatterRepository") private matterRepository: MatterRepository,
  ) {}

  public handler(): Promise<Matter[]> {
    return this.matterRepository.getAll();
  }
}
