import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { CreateClientDto, UpdateClientDto } from '../domain/dtos';
import { ClientUseCases, ClientFactoryService } from '../use-cases/client';
import { ReceiptFactoryService, ReceiptUseCases } from '../use-cases/receipt';

@Controller('api/clients')
export class ClientController {
  constructor(
    private clientUseCases: ClientUseCases,
    private clientFactoryService: ClientFactoryService,
    private receiptUseCases: ReceiptUseCases,
    private receiptFactoryService: ReceiptFactoryService,
  ) {}

  @Get()
  async getAll() {
    return this.clientUseCases.getAllClients();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.clientUseCases.getClientById(id);
  }

  @Post()
  async createClient(@Body() clientDto: CreateClientDto) {
    const receipts: string[] = [];
    if (clientDto.receipts)
      for (const receiptDto of clientDto.receipts) {
        const receipt = this.receiptFactoryService.createNewReceipt(receiptDto);
        const createdReceipt =
          await this.receiptUseCases.createReceipt(receipt);
        receipts.push(createdReceipt._id);
      }
    const client = this.clientFactoryService.createNewClient(clientDto);
    client.receipts = receipts;
    const createdClient = await this.clientUseCases.createClient(client);

    return createdClient;
  }

  @Put(':id')
  async updateClient(
    @Param('id') clientId: string,
    @Body() clientDto: UpdateClientDto,
  ) {
    const receipts: string[] = [];
    if (clientDto.receipts)
      for (const receiptDto of clientDto.receipts) {
        if (!receiptDto._id) {
          const receipt =
            this.receiptFactoryService.createNewReceipt(receiptDto);
          const createdReceipt =
            await this.receiptUseCases.createReceipt(receipt);
          receipts.push(createdReceipt._id);
        } else {
          const receipt = this.receiptFactoryService.updateReceipt(receiptDto);
          const updatedReceipt =
            await this.receiptUseCases.updateReceipt(receipt);
          receipts.push(updatedReceipt._id);
        }
      }
    const client = this.clientFactoryService.updateClient(clientDto);
    client.receipts = receipts;
    return this.clientUseCases.updateClient(clientId, client);
  }
}
