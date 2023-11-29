import { Module } from '@nestjs/common';
import { DataServicesModule } from './services/data-services/data-services.module';
import { ClientController } from './controllers/client.controller';
import { ClientUseCasesModule } from './use-cases/client';
import { ReceiptUseCasesModule } from './use-cases/receipt';

@Module({
  imports: [DataServicesModule, ClientUseCasesModule, ReceiptUseCasesModule],
  controllers: [ClientController],
})
export class AppModule {}
