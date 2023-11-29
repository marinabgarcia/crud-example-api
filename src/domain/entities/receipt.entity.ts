import { Client } from './index';

export class Receipt {
  _id: string;

  date: Date;

  client: Client;

  tax_amount: number;

  tax_percentage: number;

  isApproved: boolean;
}
