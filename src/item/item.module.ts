import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemRequestService } from './item-request.service';
import { ItemController } from './item.controller';
import { ItemRepo } from './item.repo';
import { ItemService } from './item.service';
import { Item, ItemSchema } from './schema/item.schema';

@Module({
  controllers: [ItemController],
  providers: [ItemService, ItemRepo, ItemRequestService],
  exports: [ItemService],
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: Item.name, schema: ItemSchema }]),
  ],
})
export class ItemModule {}
