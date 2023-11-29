import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDataServices } from '../../../domain/abstracts';
import { MongoGenericRepository } from './mongo-generic-repository';
import { Receipt, ReceiptDocument, Client, ClientDocument } from './model';

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap
{
  receipts: MongoGenericRepository<Receipt>;
  clients: MongoGenericRepository<Client>;

  constructor(
    @InjectModel(Receipt.name)
    private ReceiptRepository: Model<ReceiptDocument>,
    @InjectModel(Client.name)
    private ClientRepository: Model<ClientDocument>,
  ) {}

  onApplicationBootstrap() {
    this.receipts = new MongoGenericRepository<Receipt>(this.ReceiptRepository);
    this.clients = new MongoGenericRepository<Client>(this.ClientRepository, [
      'receipts',
    ]);
  }
}
