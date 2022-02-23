import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Zombie } from './schema/zombie.schema';
import { ZombieRepo } from './zombie.repo';
import { ZombieService } from './zombie.service';

const ZombieModel = {
  findAll: jest.fn().mockResolvedValue([]),
  create: jest.fn().mockResolvedValue({}),
};

describe('ZombieService', () => {
  let service: ZombieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ZombieService,
        ZombieRepo,
        {
          provide: getModelToken(Zombie.name),
          useValue: ZombieModel,
        },
      ],
    }).compile();

    service = module.get<ZombieService>(ZombieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('create new zombie', async () => {
    const response = await service.create({ name: 'test' });

    expect(response).toEqual({});
  });
});
