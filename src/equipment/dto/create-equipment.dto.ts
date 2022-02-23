import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { IsObjectId } from 'class-validator-mongo-object-id';

export class CreateEquipmentDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsObjectId()
  zombie: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsObjectId()
  item: string;

  @ApiProperty()
  @IsOptional()
  qty?: number;
}
