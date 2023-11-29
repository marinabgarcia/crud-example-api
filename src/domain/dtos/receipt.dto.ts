import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class ReceiptDto {
  @IsNotEmpty()
  client_id: any;

  @IsDate()
  date: Date;

  @IsNumber()
  tax_amount: number;

  @IsNumber()
  tax_percentage: number;

  @IsString()
  @IsOptional()
  _id: string;

  @IsBoolean()
  @IsOptional()
  isApproved: boolean;
}

export class CreateReceiptDto extends ReceiptDto {}
export class UpdateReceiptDto extends PartialType(ReceiptDto) {}
