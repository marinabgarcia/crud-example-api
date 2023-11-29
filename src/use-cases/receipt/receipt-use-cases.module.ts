import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/services/data-services/data-services.module';
import { ReceiptFactoryService, ReceiptUseCases } from '.';

@Module({
  imports: [DataServicesModule],
  providers: [ReceiptFactoryService, ReceiptUseCases],
  exports: [ReceiptFactoryService, ReceiptUseCases],
})
export class ReceiptUseCasesModule {}
