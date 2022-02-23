import { Inject, Injectable } from '@nestjs/common';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { EquipmentRepo } from './equipment.repo';

@Injectable()
export class EquipmentService {
  @Inject(EquipmentRepo)
  equipmentRepo: EquipmentRepo;

  create(createEquipmentDto: CreateEquipmentDto) {
    // TODO: validation of zombie and item ids
    // TODO: uniqueness
    return this.equipmentRepo.create(createEquipmentDto);
  }

  findAll() {
    return this.equipmentRepo.findAll();
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
