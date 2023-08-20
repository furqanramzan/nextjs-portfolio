'use server';

import { redirect } from 'next/navigation';
import type { UpsertAdminSchema } from '@/app/admin/validation';
import { upsertAdmin as upsertAdminHandler } from '@/app/admin/upsert-admin';

export async function upsertAdmin(inputs: UpsertAdminSchema) {
  const result = await upsertAdminHandler(inputs);

  if (result.data) {
    redirect('/admin/auth/admin');
  } else {
    return result;
  }
}
