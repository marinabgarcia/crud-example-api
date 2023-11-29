import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ReceiptDocument = HydratedDocument<Receipt>;

@Schema()
export class Receipt {
  @Prop()
  date: Date;

  @Prop()
  tax_percentage: number;

  @Prop()
  tax_amount: number;

  @Prop({ required: true, default: false })
  isApproved: boolean;
}

export const ReceiptSchema = SchemaFactory.createForClass(Receipt);
