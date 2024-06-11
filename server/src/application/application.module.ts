import { Module } from "@nestjs/common";
import { DomainModule } from "src/domain/domain.module";

import { DatabaseModule } from "@src/infrastructure/adapters/database.module";
import UserRepositoryMongo from "@src/infrastructure/adapters/repository/user.repository.mongo";

import { USER_USECASES } from "./usecases/user";

@Module({
  imports: [DomainModule, DatabaseModule],
  providers: [
    ...USER_USECASES,
    { provide: "UserRepository", useClass: UserRepositoryMongo },
  ],
  exports: [...USER_USECASES],
})
export class ApplicationModule {}
