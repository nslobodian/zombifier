import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { IsObjectId } from 'class-validator-mongo-object-id';

export class GetEquipmentDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsObjectId()
  zombie?: string;
}
