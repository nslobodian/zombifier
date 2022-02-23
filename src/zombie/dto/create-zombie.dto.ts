import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateZombieDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;
}
