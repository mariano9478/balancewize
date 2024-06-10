import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import {
  Actor,
  ActorSchema,
} from "@src/infrastructure/adapters/repository/actor/entity/actor.entity";
import {
  Matter,
  MatterSchema,
} from "@src/infrastructure/adapters/repository/matter/entity/matter.entity";

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017", {
      dbName: "matter_v2",
    }),
    MongooseModule.forFeature([{ name: Actor.name, schema: ActorSchema }]),
    MongooseModule.forFeature([{ name: Matter.name, schema: MatterSchema }]),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
