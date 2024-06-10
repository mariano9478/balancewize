import { Controller, Get, HttpCode, HttpStatus, Param } from "@nestjs/common";

import GetAllMattersCases from "@src/application/usecases/matter/get-all-matters.usecase";
import GetMatterByIdCase from "@src/application/usecases/matter/get-by-id.usecase";

@Controller("matters")
export class MatterContorller {
  constructor(
    private getAllMattersCases: GetAllMattersCases,
    private getMatterByIdCase: GetMatterByIdCase,
  ) {}

  @Get("/:matterId")
  @HttpCode(HttpStatus.OK)
  public async getMatter(
    @Param("matterId") matterId: string,
  ): Promise<unknown> {
    const matters = await this.getMatterByIdCase.handler(matterId);
    return matters;
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  public async getMatters(): Promise<unknown> {
    const matters = await this.getAllMattersCases.handler();
    return matters;
  }
}
