import { Injectable } from '@nestjs/common';
import { Client } from '../../domain/entities';
import { IDataServices } from '../../domain/abstracts';

@Injectable()
export class ClientUseCases {
  constructor(private dataServices: IDataServices) {}

  getAllClients(): Promise<Client[]> {
    return this.dataServices.clients.getAll();
  }

  getClientById(id: any): Promise<Client> {
    return this.dataServices.clients.get(id);
  }

  async createClient(book: Client): Promise<Client> {
    try {
      // call to our dependencies
      const createdClient = await this.dataServices.clients.create(book);

      return createdClient;
    } catch (error) {
      throw error;
    }
  }

  updateClient(bookId: string, book: Client): Promise<Client> {
    return this.dataServices.clients.update(bookId, book);
  }
}
