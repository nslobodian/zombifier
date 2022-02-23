import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item, ItemDocument } from './schema/item.schema';

@Injectable()
export class ItemRepo {
  constructor(@InjectModel(Item.name) private model: Model<ItemDocument>) {}

  create(createItemDto: Item) {
    return this.model.create(createItemDto);
  }

  findAll(): Promise<Item[]> {
    return this.model.find().lean().exec();
  }

  findOne(id: string) {
    return this.model.findOne({ _id: id }).lean().exec();
  }

  update(id: string, updateItemDto: Item) {
    return this.model.updateOne({ _id: id }, updateItemDto);
  }

  async remove(id: string) {
    await this.model.deleteOne({ _id: id });
  }
}
