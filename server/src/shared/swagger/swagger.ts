import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import { VERSION } from "../constants/constants";

export const setupSwagger = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle("Coint Wize")
    .setDescription("API Documentation")
    .setVersion(VERSION)
    .addCookieAuth("session")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(":version/docs", app, document);
};
