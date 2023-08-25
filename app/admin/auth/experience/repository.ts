import { type InferModel, eq } from 'drizzle-orm';
import { BaseRepository } from '@/utils/repository/base';
import { experiences } from '@/database/schema';

type Experiences = typeof experiences;
export type Experience = InferModel<Experiences, 'select'>;
type Create = InferModel<Experiences, 'insert'>;

export class ExperienceRepository extends BaseRepository<Experiences> {
  constructor() {
    super(experiences);
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
