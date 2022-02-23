import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import mongoose from 'mongoose';
import { CurrencyCode } from '../currency/currency.model';
import { CurrencyService } from '../currency/currency.service';
import { ItemService } from '../item/item.service';
import { EquipmentRepo } from './equipment.repo';
import { EquipmentService } from './equipment.service';
import { Equipment } from './schema/equipment.schema';

describe('EquipmentService', () => {
  let service: EquipmentService;
  const itemServiceMock = {
    findAll: jest.fn(),
  };
  const currencyServiceMock = {
    findAll: jest.fn(),
  };
  const equipmentModelMock = {
    find: jest.fn(),
  };

  beforeEach(async () => {
    jest.resetAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EquipmentService,
        EquipmentRepo,
        {
          provide: ItemService,
          useValue: itemServiceMock,
        },
        {
          provide: CurrencyService,
          useValue: currencyServiceMock,
        },
        {
          provide: getModelToken(Equipment.name),
          useValue: equipmentModelMock,
        },
      ],
    }).compile();

    service = module.get<EquipmentService>(EquipmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('return zombie items with name and price', async () => {
    // Arrange
    const itemId = new mongoose.Types.ObjectId('621689af379a49b3f0424f28');
    const equipmentId = new mongoose.Types.ObjectId('621689e5a5b9d80768731606');
    const zombieId = '621623c6319e8ff39d207caf';

    equipmentModelMock.find.mockResolvedValue([
      {
        item: itemId,
        zombie: 'zombie-ids',
        qty: 2,
        _id: equipmentId,
      },
    ]);
    itemServiceMock.findAll.mockResolvedValue([
      { externalId: '1', price: 10, _id: itemId, name: '1234' },
    ]);

    // Act
    const response = await service.findAll({ zombie: zombieId });

    // Assert
    expect(response).toEqual([
      {
        id: equipmentId.toHexString(),
        name: '1234',
        qty: 2,
        totalPrice: 20,
      },
    ]);
  });

  it('return zombie item total price in different currencies', async () => {
    // Arrange
    const itemId = new mongoose.Types.ObjectId('621689af379a49b3f0424f28');
    const equipmentId = new mongoose.Types.ObjectId('621689e5a5b9d80768731606');
    const zombieId = '621623c6319e8ff39d207caf';

    equipmentModelMock.find.mockResolvedValue([
      {
        item: itemId,
        zombie: 'zombie-ids',
        qty: 2,
        _id: equipmentId,
      },
    ]);
    itemServiceMock.findAll.mockResolvedValue([
      { externalId: '1', price: 10, _id: itemId, name: '1234' },
    ]);
    currencyServiceMock.findAll.mockResolvedValue([
      { code: CurrencyCode.pln, rate: 1 },
      { code: CurrencyCode.eu, rate: 4.50275 },
      { code: CurrencyCode.usd, rate: 3.9865 },
    ]);
    // Act
    const response = await service.getTotalForZombie(zombieId);
    // Assert
    expect(response).toEqual([
      {
        code: 'pln',
        price: 20,
      },
      {
        code: 'eu',
        price: 90.05,
      },
      {
        code: 'usd',
        price: 79.73,
      },
    ]);
  });
});
