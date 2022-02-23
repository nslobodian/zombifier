import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ZombieDocument = Zombie & Document;

@Schema({ timestamps: true })
export class Zombie {
  @Prop({ type: String, required: true, unique: true })
  name: string;

  @Prop({ type: Date })
  createdAt: Date;

  @Prop({ type: Date })
  updatedAt: Date;
}

export const ZombieSchema = SchemaFactory.createForClass(Zombie);
