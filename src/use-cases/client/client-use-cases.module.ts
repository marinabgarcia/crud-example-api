import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/services/data-services/data-services.module';
import { ClientFactoryService, ClientUseCases } from '.';

@Module({
  imports: [DataServicesModule],
  providers: [ClientFactoryService, ClientUseCases],
  exports: [ClientFactoryService, ClientUseCases],
})
export class ClientUseCasesModule {}
