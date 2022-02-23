import { Inject, Injectable } from '@nestjs/common';
import { round } from '../utils/round';
import { CurrencyCode } from '../currency/currency.model';
import { CurrencyService } from '../currency/currency.service';
import { ItemService } from '../item/item.service';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { GetEquipmentDto } from './dto/get-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { EquipmentRepo } from './equipment.repo';
import { EquipmentFacade } from './item.facade';

@Injectable()
export class EquipmentService {
  @Inject(EquipmentRepo)
  equipmentRepo: EquipmentRepo;

  @Inject(ItemService)
  itemService: ItemService;

  @Inject(CurrencyService)
  currencyService: CurrencyService;

  create(createEquipmentDto: CreateEquipmentDto) {
    // TODO: validation of zombie and item ids
    // TODO: uniqueness
    // TODO: validate number of items in equipment
    return this.equipmentRepo.create(createEquipmentDto);
  }

  async findAll(query?: GetEquipmentDto) {
    const equipments = await this.equipmentRepo.findAll(query);
    const items = await this.itemService.findAll();

    return equipments.map((equipment) =>
      new EquipmentFacade(equipment, items).plainEquipment(),
    );
  }

  async getTotalForZombie(zombieId: string) {
    const equipments = await this.findAll({ zombie: zombieId });
    const exchangeRate = await this.currencyService.findAll([
      CurrencyCode.pln,
      CurrencyCode.eu,
      CurrencyCode.usd,
    ]);

    const totalForZombie = equipments.reduce((pv, cv) => {
      return cv.totalPrice + pv;
    }, 0);

    return exchangeRate.map((rate) => ({
      code: rate.code,
      price: round(totalForZombie * rate.rate, 2),
    }));
  }

  findOne(id: string) {
    return this.equipmentRepo.findOne(id);
  }

  update(id: string, updateEquipmentDto: UpdateEquipmentDto) {
    return this.equipmentRepo.update(id, updateEquipmentDto);
  }

  remove(id: string) {
    return this.equipmentRepo.remove(id);
  }
}
