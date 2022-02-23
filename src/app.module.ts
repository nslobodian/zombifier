import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ZombieModule } from './zombie/zombie.module';
import { EquipmentModule } from './equipment/equipment.module';
import { ItemModule } from './item/item.module';
import { CurrencyModule } from './currency/currency.module';

@Module({
  imports: [ZombieModule, EquipmentModule, ItemModule, CurrencyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
