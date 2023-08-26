import { type InferModel, eq } from 'drizzle-orm';
import { BaseRepository } from '@/utils/repository/base';
import { messages } from '@/database/schema';

type Messages = typeof messages;
export type Message = InferModel<Messages, 'select'>;
type Create = InferModel<Messages, 'insert'>;

export class MessageRepository extends BaseRepository<Messages> {
  constructor() {
    super(messages);
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
