import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { LoggerModule } from "nestjs-pino";

import { ApplicationModule } from "./application/application.module";
import { AppConfigModule } from "./config/app/config.module";
import { DomainModule } from "./domain/domain.module";
import { InfrastructureModule } from "./infrastructure/infrastructure.module";
import { LogModule } from "./shared/logger/logger.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, cache: true }),
    AppConfigModule,
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: "pino-pretty",
          options: {
            singleLine: true,
          },
        },
      },
    }),
    DomainModule,
    ApplicationModule,
    InfrastructureModule,
    LogModule,
  ],
})
export class AppModule {}
