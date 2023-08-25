import { type InferModel, eq } from 'drizzle-orm';
import { BaseRepository } from '@/utils/repository/base';
import { workSkills } from '@/database/schema';

type WorkSkills = typeof workSkills;
export type WorkSkill = InferModel<WorkSkills, 'select'>;
type Create = InferModel<WorkSkills, 'insert'>;

export class WorkSkillRepository extends BaseRepository<WorkSkills> {
  constructor() {
    super(workSkills);
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
