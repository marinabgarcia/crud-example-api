import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Receipt } from './';
import { HydratedDocument } from 'mongoose';

export type ClientDocument = HydratedDocument<Client>;

@Schema()
export class Client {
  @Prop({ required: true, unique: true })
  client_id: number;

  @Prop({ required: true })
  fiscal_id: string;

  @Prop({
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Receipt',
    required: true,
  })
  receipts: [Receipt];

  @Prop({ required: true })
  company_name: string;

  @Prop({ required: true, default: false })
  isValid: boolean;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
