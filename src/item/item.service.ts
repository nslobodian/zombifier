import { Inject, Injectable } from '@nestjs/common';
import { ItemRequestService } from './item-request.service';
import { ItemRepo } from './item.repo';
import { ItemDocument } from './schema/item.schema';

@Injectable()
export class ItemService {
  @Inject(ItemRepo)
  itemRepo: ItemRepo;

  @Inject(ItemRequestService)
  itemRequestService: ItemRequestService;

  findAll(): Promise<ItemDocument[]> {
    return this.itemRepo.findAll();
  }

  // TODO: Create Cron Job
  async ingestItems() {
    const items = await this.itemRequestService.request();
    items.items.map((item) =>
      this.itemRepo.create({
        externalId: `${item.id}`,
        price: item.price,
        name: item.name,
      }),
    );
    return true;
  }
}
