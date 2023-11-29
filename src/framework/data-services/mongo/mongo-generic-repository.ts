import { Model } from 'mongoose';
import { IGenericRepository } from '../../../domain/abstracts';

export class MongoGenericRepository<T> implements IGenericRepository<T> {
  private _repository: Model<T>;
  private _populateOnFind: string[];

  constructor(repository: Model<T>, populateOnFind: string[] = []) {
    this._repository = repository;
    this._populateOnFind = populateOnFind;
  }

  getAll(): Promise<T[]> {
    return this._repository.find().populate(this._populateOnFind).exec();
  }

  get(id: any): Promise<any> {
    return this._repository.findById(id).populate(this._populateOnFind).exec();
  }

  async create(item: T): Promise<T> {
    const itemcreated = await this._repository.create(item);
    return this.get(itemcreated._id);
  }

  async update(id: string, item: T) {
    console.log('update', id, item);
    const itemupdated = await this._repository.findByIdAndUpdate(id, item);
    return this.get(itemupdated._id);
  }
}
