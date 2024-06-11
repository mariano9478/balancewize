import { ValidationPipe, VersioningType } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { Logger, LoggerErrorInterceptor } from "nestjs-pino";

import { ResponseFormatInterceptor } from "@src/infrastructure/interceptors/response-format.interceptor";
import {
  DEFAULT_PORT,
  LOCALHOST,
  VERSION,
} from "@src/shared/constants/constants";
import { setupSwagger } from "@src/shared/swagger/swagger";
const cookieSession = require("cookie-session");
import helmet from "helmet";

import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.use(cookieSession({ name: "session", keys: ["secret"] }));
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  app.useGlobalInterceptors(new ResponseFormatInterceptor());
  const logger = app.get(Logger);

  app.useLogger(logger);
  app.useGlobalInterceptors(new LoggerErrorInterceptor());

  app.setGlobalPrefix("api");

  app.enableVersioning({
    defaultVersion: VERSION,
    type: VersioningType.URI,
  });
  setupSwagger(app);
  const configService = app.get(ConfigService);
  const port = configService.get<string>("PORT", DEFAULT_PORT.toString());

  await app.listen(port, LOCALHOST);
}

bootstrap().catch(handleError);

function handleError(error: unknown) {
  // eslint-disable-next-line no-console
  console.error(error);
  // eslint-disable-next-line unicorn/no-process-exit
  process.exit(1);
}
