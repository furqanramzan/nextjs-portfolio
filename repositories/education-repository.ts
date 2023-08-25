import { type InferModel, eq } from 'drizzle-orm';
import { BaseRepository } from './base-repository';
import { educations } from '@/database/schema';

type Educations = typeof educations;
export type Education = InferModel<Educations, 'select'>;
type Create = InferModel<Educations, 'insert'>;

export class EducationRepository extends BaseRepository<Educations> {
  constructor() {
    super(educations);
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
