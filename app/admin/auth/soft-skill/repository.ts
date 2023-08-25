import { type InferModel, eq } from 'drizzle-orm';
import { BaseRepository } from '@/utils/repository/base';
import { softSkills } from '@/database/schema';

type SoftSkills = typeof softSkills;
export type SoftSkill = InferModel<SoftSkills, 'select'>;
type Create = InferModel<SoftSkills, 'insert'>;

export class SoftSkillRepository extends BaseRepository<SoftSkills> {
  constructor() {
    super(softSkills);
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
