import { Module } from "@nestjs/common";

import { ApplicationModule } from "../application/application.module";
import { DatabaseModule } from "./adapters/database.module";
import { UserContorller } from "./controllers/user.controller";

@Module({
  imports: [ApplicationModule, DatabaseModule],
  controllers: [UserContorller],
})
export class InfrastructureModule {}
