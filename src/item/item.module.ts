import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemRepo } from './item.repo';
import { ItemService } from './item.service';
import { Item, ItemSchema } from './schema/item.schema';

@Module({
  providers: [ItemService, ItemRepo],
  imports: [
    MongooseModule.forFeature([{ name: Item.name, schema: ItemSchema }]),
  ],
})
export class ItemModule {}
