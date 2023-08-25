import { type InferModel, eq } from 'drizzle-orm';
import { BaseRepository } from '@/utils/repository/base';
import { admins } from '@/database/schema';

type Admins = typeof admins;
export type Admin = InferModel<Admins, 'select'>;
type Create = InferModel<Admins, 'insert'>;

export class AdminRepository extends BaseRepository<Admins> {
  constructor() {
    super(admins);
  }

  async create(values: Create) {
    const result = await this.drizzle.insert(this.table).values(values);

    return this.createResponse(result);
  }

  async update(values: Create, id: number) {
    const result = await this.drizzle
      .update(this.table)
      .set(values)
      .where(eq(this.table.id, id));

    return this.updateResponse(result, id);
  }

  emailExists(email: string, id?: number) {
    return this.existsWithEqualConstraint(this.table.email, email, id);
  }

  getLoginData(email: string) {
    return this.drizzle.query.admins.findFirst({
      with: { adminPassword: true },
      columns: { id: true, name: true, email: true },
      where: eq(this.table.email, email),
    });
  }
}
