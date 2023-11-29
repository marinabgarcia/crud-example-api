import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IDataServices } from '../../../domain/abstracts';
import { Receipt, ReceiptSchema, Client, ClientSchema } from './model';
import { MongoDataServices } from './mongo-data-services.service';
import { UniqueValidator } from '../../filters/unique-validator.filter';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Receipt.name, schema: ReceiptSchema },
      { name: Client.name, schema: ClientSchema },
    ]),
    MongooseModule.forRoot(process.env.MONGO_URL, {
      dbName: 'CRUD',
    }),
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: MongoDataServices,
    },
    UniqueValidator,
  ],
  exports: [IDataServices, UniqueValidator],
})
export class MongoDataServicesModule {}
