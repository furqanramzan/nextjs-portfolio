import { type InferModel, eq } from 'drizzle-orm';
import { BaseRepository } from './base-repository';
import { services } from '@/database/schema';

type Services = typeof services;
export type Service = InferModel<Services, 'select'>;
type Create = InferModel<Services, 'insert'>;

export class ServiceRepository extends BaseRepository<Services> {
  constructor() {
    super(services);
  }

  async create(values: Create) {
    const result = await this.drizzle.insert(this.table).values(values);

    return this.createResponse(result);
  }

  async createMany(values: Create[]) {
    const result = await this.drizzle.insert(this.table).values(values);

    return this.createManyResponse(result);
  }

  async update(values: Create, id: number) {
    const result = await this.drizzle
      .update(this.table)
      .set(values)
      .where(eq(this.table.id, id));

    return this.updateResponse(result, id);
  }
}
