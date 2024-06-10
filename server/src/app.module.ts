import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";


import { LoggerModule } from "@shared/logger/logger.module";

import { ApplicationModule } from "./application/application.module";
import { DomainModule } from "./domain/domain.module";
import { InfrastructureModule } from "./infrastructure/infrastructure.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, cache: true }),
    LoggerModule,
    DomainModule,
    ApplicationModule,
    InfrastructureModule,
  ],
})
export class AppModule {}
