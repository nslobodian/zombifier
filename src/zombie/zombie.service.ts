import { Inject, Injectable } from '@nestjs/common';
import { CreateZombieDto } from './dto/create-zombie.dto';
import { UpdateZombieDto } from './dto/update-zombie.dto';
import { ZombieRepo } from './zombie.repo';

@Injectable()
export class ZombieService {
  @Inject(ZombieRepo)
  private zombieRepo: ZombieRepo;

  create(createZombieDto: CreateZombieDto) {
    return this.zombieRepo.create(createZombieDto);
  }

  findAll() {
    return this.zombieRepo.findAll();
  }

  findOne(id: string) {
    return this.zombieRepo.findOne(id);
  }

  update(id: string, updateZombieDto: UpdateZombieDto) {
    return this.zombieRepo.update(id, updateZombieDto);
  }

  remove(id: string) {
    return this.zombieRepo.remove(id);
  }
}
