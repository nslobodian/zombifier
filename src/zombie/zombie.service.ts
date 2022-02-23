import { Injectable } from '@nestjs/common';
import { CreateZombieDto } from './dto/create-zombie.dto';
import { UpdateZombieDto } from './dto/update-zombie.dto';

@Injectable()
export class ZombieService {
  create(createZombieDto: CreateZombieDto) {
    return 'This action adds a new zombie';
  }

  findAll() {
    return `This action returns all zombie`;
  }

  findOne(id: number) {
    return `This action returns a #${id} zombie`;
  }

  update(id: number, updateZombieDto: UpdateZombieDto) {
    return `This action updates a #${id} zombie`;
  }

  remove(id: number) {
    return `This action removes a #${id} zombie`;
  }
}
