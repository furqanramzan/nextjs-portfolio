import { type InferModel, eq } from 'drizzle-orm';
import { BaseRepository } from '@/utils/repository/base';
import { projects } from '@/database/schema';

type Projects = typeof projects;
export type Project = InferModel<Projects, 'select'>;
type Create = InferModel<Projects, 'insert'>;

export class ProjectRepository extends BaseRepository<Projects> {
  constructor() {
    super(projects);
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
