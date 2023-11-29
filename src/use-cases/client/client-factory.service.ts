import { Injectable } from '@nestjs/common';
import { Client } from '../../domain/entities';
import { CreateClientDto, UpdateClientDto } from '../../domain/dtos';

@Injectable()
export class ClientFactoryService {
  createNewClient(createClientDto: CreateClientDto) {
    const newClient = new Client();
    newClient.client_id = createClientDto.client_id;
    newClient.fiscal_id = createClientDto.fiscal_id;
    newClient.company_name = createClientDto.company_name;
    newClient.isValid = createClientDto.isValid;

    return newClient;
  }

  updateClient(updateClientDto: UpdateClientDto) {
    const newClient = new Client();
    newClient.client_id = updateClientDto.client_id;
    newClient.fiscal_id = updateClientDto.fiscal_id;
    newClient.company_name = updateClientDto.company_name;
    newClient.isValid = updateClientDto.isValid;

    return newClient;
  }
}
