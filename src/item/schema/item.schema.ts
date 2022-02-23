import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ItemDocument = Item & Document;

@Schema({ timestamps: true })
export class Item {
  @Prop({ type: String })
  name: string;

  @Prop({ type: String, required: true })
  externalId: string;

  @Prop({ type: Number })
  price: number;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
