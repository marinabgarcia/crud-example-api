import { Module } from '@nestjs/common';
import { UniqueValidator } from './unique-validator.filter';

@Module({
  imports: [MongoDataServicesModule],
  exports: [UniqueValidator],
})
export class MongoDataServicesModule {}
