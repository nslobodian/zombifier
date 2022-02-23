import { Module } from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { EquipmentController } from './equipment.controller';
import { EquipmentRepo } from './equipment.repo';
import { Equipment, EquipmentSchema } from './schema/equipment.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [EquipmentController],
  providers: [EquipmentService, EquipmentRepo],
  imports: [
    MongooseModule.forFeature([
      { name: Equipment.name, schema: EquipmentSchema },
    ]),
  ],
})
export class EquipmentModule {}
