import { Injectable } from '@nestjs/common';
import { Receipt } from '../../domain/entities';
import { IDataServices } from '../../domain/abstracts';

@Injectable()
export class ReceiptUseCases {
  constructor(private dataServices: IDataServices) {}

  getAllReceipts(): Promise<Receipt[]> {
    return this.dataServices.receipts.getAll();
  }

  getReceiptById(id: any): Promise<Receipt> {
    return this.dataServices.receipts.get(id);
  }

  async createReceipt(receipt: Receipt): Promise<Receipt> {
    try {
      // call to our dependencies
      const createdReceipt = await this.dataServices.receipts.create(receipt);

      return createdReceipt;
    } catch (error) {
      throw error;
    }
  }

  updateReceipt(receipt: Receipt): Promise<Receipt> {
    return this.dataServices.receipts.update(receipt._id, receipt);
  }
}
