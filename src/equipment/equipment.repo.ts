import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, mongo, FilterQuery } from 'mongoose';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { GetEquipmentDto } from './dto/get-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { Equipment, EquipmentDocument } from './schema/equipment.schema';

@Injectable()
export class EquipmentRepo {
  constructor(
    @InjectModel(Equipment.name) private model: Model<EquipmentDocument>,
  ) {}

  create(createEquipmentDto: CreateEquipmentDto) {
    return this.model.create({
      ...createEquipmentDto,
      zombie: new mongo.ObjectId(createEquipmentDto.zombie),
      item: new mongo.ObjectId(createEquipmentDto.item),
    });
  }

  findAll(queryParams: GetEquipmentDto) {
    const query: FilterQuery<Equipment> = {};

    if (queryParams.zombie) {
      query.zombie = new mongo.ObjectId(queryParams.zombie);
    }

    return this.model.find(query).lean().exec();
  }

  findOne(id: string) {
    return this.model.findOne({ _id: id }).lean().exec();
  }

  update(id: string, updateEquipmentDto: UpdateEquipmentDto) {
    return this.model.updateOne({ _id: id }, updateEquipmentDto);
  }

  async remove(id: string) {
    await this.model.deleteOne({ _id: id });
  }
}
