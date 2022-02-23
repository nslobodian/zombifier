import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type EquipmentDocument = Equipment & Document;

@Schema({ timestamps: true })
export class Equipment {
  @Prop({ type: Types.ObjectId, ref: 'Zombie' })
  zombie: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Item' })
  item: Types.ObjectId;

  @Prop({ type: Number })
  qty?: number;

  @Prop({ type: Date })
  createdAt: Date;

  @Prop({ type: Date })
  updatedAt: Date;
}

export const EquipmentSchema = SchemaFactory.createForClass(Equipment);
