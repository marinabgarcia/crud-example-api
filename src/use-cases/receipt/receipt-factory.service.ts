import { Injectable } from '@nestjs/common';
import { Receipt } from '../../domain/entities';
import { CreateReceiptDto, UpdateReceiptDto } from '../../domain/dtos';

@Injectable()
export class ReceiptFactoryService {
  createNewReceipt(createReceiptDto: CreateReceiptDto) {
    const newReceipt = new Receipt();
    newReceipt.date = createReceiptDto.date;
    newReceipt.tax_amount = createReceiptDto.tax_amount;
    newReceipt.tax_percentage = createReceiptDto.tax_percentage;
    newReceipt.isApproved = createReceiptDto.isApproved;

    return newReceipt;
  }

  updateReceipt(updateReceiptDto: UpdateReceiptDto) {
    const newReceipt = new Receipt();
    newReceipt.date = updateReceiptDto.date;
    newReceipt.tax_amount = updateReceiptDto.tax_amount;
    newReceipt.tax_percentage = updateReceiptDto.tax_percentage;
    newReceipt.isApproved = updateReceiptDto.isApproved;
    newReceipt._id = updateReceiptDto._id;

    return newReceipt;
  }
}
