import { type InferModel, eq } from 'drizzle-orm';
import { BaseRepository } from '@/utils/repository/base';
import { adminPasswords } from '@/database/schema';

type AdminPassword = typeof adminPasswords;
type Create = InferModel<AdminPassword, 'insert'>;

export class AdminPasswordRepository extends BaseRepository<AdminPassword> {
  constructor() {
    super(adminPasswords);
  }

  async upsert(values: Create) {
    const item = await this.getOneByColumn(this.table.adminId, values.adminId);

    if (item) {
      const result = await this.drizzle
        .update(this.table)
        .set(values)
        .where(eq(this.table.id, item.id));

      return this.updateResponse(result, item.id);
    } else {
      const result = await this.drizzle.insert(this.table).values(values);

      return this.createResponse(result);
    }
  }
}
