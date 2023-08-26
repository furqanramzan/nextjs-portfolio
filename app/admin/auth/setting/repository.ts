import { type InferModel, eq } from 'drizzle-orm';
import { BaseRepository } from '@/utils/repository/base';
import { settings } from '@/database/schema';

type Settings = typeof settings;
export type Setting = InferModel<Settings, 'select'>;
type Create = InferModel<Settings, 'insert'>;

export class SettingRepository extends BaseRepository<Settings> {
  constructor() {
    super(settings);
  }

  async createMany(values: Create[]) {
    const result = await this.drizzle.insert(this.table).values(values);

    return this.createManyResponse(result);
  }

  async update(values: Omit<Create, 'name' | 'key'>, id: number) {
    const result = await this.drizzle
      .update(this.table)
      .set(values)
      .where(eq(this.table.id, id));

    return this.updateResponse(result, id);
  }
}
