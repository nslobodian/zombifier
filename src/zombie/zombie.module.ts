import { Module } from '@nestjs/common';
import { ZombieService } from './zombie.service';
import { ZombieController } from './zombie.controller';
import { ZombieRepo } from './zombie.repo';
import { MongooseModule } from '@nestjs/mongoose';
import { Zombie, ZombieSchema } from './schema/zombie.schema';

@Module({
  controllers: [ZombieController],
  providers: [ZombieService, ZombieRepo],
  imports: [
    MongooseModule.forFeature([{ name: Zombie.name, schema: ZombieSchema }]),
  ],
})
export class ZombieModule {}
