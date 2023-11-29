import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsArray,
  IsBoolean,
  IsOptional,
  Validate,
} from 'class-validator';
import { PartialType } from '@nestjs/swagger';
import { ReceiptDto } from './receipt.dto';
import { UniqueValidator } from 'src/framework/filters/unique-validator.filter';

export class ClientDto {
  @IsNumber()
  @IsNotEmpty({ message: 'Client id is required' })
  @Validate(UniqueValidator, ['client_id'], {
    message: 'client_id already exists',
  })
  client_id: number;

  @IsString()
  @IsNotEmpty({ message: 'The name of the company is required' })
  company_name: string;

  @IsString()
  @IsNotEmpty({ message: 'Fiscal id is required' })
  fiscal_id: string;

  @IsArray()
  @IsOptional()
  receipts: ReceiptDto[];

  @IsBoolean()
  @IsOptional()
  isValid: boolean;
}
export class CreateClientDto extends ClientDto {}
export class UpdateClientDto extends PartialType(ClientDto) {}
