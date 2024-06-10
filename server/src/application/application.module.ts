import { Module } from "@nestjs/common";
import { DomainModule } from "src/domain/domain.module";

import { DatabaseModule } from "@src/infrastructure/adapters/database.module";
import MatterRepositoryMongo from "@src/infrastructure/adapters/repository/matter/matter.repository.mongo";

import { ACTOR_USECASES } from "./usecases/matter";

@Module({
  imports: [DomainModule, DatabaseModule],
  providers: [
    ...ACTOR_USECASES,
    { provide: "MatterRepository", useClass: MatterRepositoryMongo },
  ],
  exports: [...ACTOR_USECASES],
})
export class ApplicationModule {}
