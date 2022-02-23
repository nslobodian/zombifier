import { Inject, Injectable } from '@nestjs/common';
import { ItemDto } from './item.dto';
import { ItemRepo } from './item.repo';
import { Item } from './schema/item.schema';

@Injectable()
export class ItemService {
  @Inject(ItemRepo)
  itemRepo: ItemRepo;

  find(): Promise<Item[]> {
    return this.itemRepo.findAll();
  }
  ingestItems(items: ItemDto[]) {
    // TODO:
  }
}
