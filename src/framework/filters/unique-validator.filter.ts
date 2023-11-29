import { InjectModel } from '@nestjs/mongoose';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Model } from 'mongoose';
import {
  Client,
  ClientDocument,
} from 'src/framework/data-services/mongo/model';
@ValidatorConstraint({ name: 'IsUniqueUser', async: true })
export class UniqueValidator implements ValidatorConstraintInterface {
  constructor(
    @InjectModel(Client.name)
    private readonly clientModel: Model<ClientDocument>,
  ) {}
  async validate(value: any, args: ValidationArguments) {
    const filter = {};
    console.log(this.clientModel);
    console.log(args);
    console.log(value);
    filter[args.property] = value;
    if (args.object['_id']) {
      filter['_id'] = { $ne: args.object['_id'] };
    }
    const count = await this.clientModel.find(filter).exec();
    console.log('count', count);
    return count.length === 0;
  }
  defaultMessage() {
    return '$(value) is already taken';
  }
}
