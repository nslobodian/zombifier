import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateZombieDto } from './dto/create-zombie.dto';
import { UpdateZombieDto } from './dto/update-zombie.dto';
import { Zombie, ZombieDocument } from './schema/zombie.schema';

@Injectable()
export class ZombieRepo {
  constructor(@InjectModel(Zombie.name) private model: Model<ZombieDocument>) {}

  create(createZombieDto: CreateZombieDto) {
    return this.model.create(createZombieDto);
  }

  findAll() {
    return this.model.find().lean().exec();
  }

  findOne(id: string) {
    return this.model.findOne({ _id: id }).lean().exec();
  }

  update(id: string, updateZombieDto: UpdateZombieDto) {
    return this.model.updateOne({ _id: id }, updateZombieDto);
  }

  async remove(id: string) {
    await this.model.deleteOne({ _id: id });
  }
}
