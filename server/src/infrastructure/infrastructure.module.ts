import { Module } from "@nestjs/common";

import { ApplicationModule } from "../application/application.module";
import { DatabaseModule } from "./adapters/database.module";
import { MatterContorller } from "./controllers/matters.controller";

@Module({
  imports: [ApplicationModule, DatabaseModule],
  controllers: [MatterContorller],
})
export class InfrastructureModule {}
